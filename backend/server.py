from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel, EmailStr
from motor.motor_asyncio import AsyncIOMotorClient
from typing import List, Optional
import os
import smtplib
import uuid
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
from datetime import datetime, timedelta
from passlib.context import CryptContext
from jose import JWTError, jwt
import bcrypt

load_dotenv()

app = FastAPI(title="Portfolio API", version="1.0.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database connection
client = AsyncIOMotorClient(os.getenv("MONGO_URL"))
db = client.portfolio_db

# Security
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/admin/login")

# Models
class ContactMessage(BaseModel):
    id: str = None
    name: str
    email: EmailStr
    message: str
    subject: Optional[str] = "Portfolio Contact"
    created_at: datetime = None

class Project(BaseModel):
    id: str = None
    title: str
    description: str
    technologies: List[str]
    image_url: Optional[str] = None
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    featured: bool = False
    created_at: datetime = None

class BlogPost(BaseModel):
    id: str = None
    title: str
    content: str
    excerpt: str
    image_url: Optional[str] = None
    tags: List[str] = []
    published: bool = False
    created_at: datetime = None

class Skill(BaseModel):
    id: str = None
    name: str
    category: str  # "frontend", "backend", "tools", "languages"
    level: int  # 1-5 scale
    icon: Optional[str] = None

class Experience(BaseModel):
    id: str = None
    company: str
    position: str
    description: str
    start_date: str
    end_date: Optional[str] = None
    technologies: List[str] = []

class AdminLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

# Email configuration
GMAIL_SETTINGS = {
    "SMTP_SERVER": "smtp.gmail.com",
    "SMTP_PORT": 587,
    "SMTP_USER": os.getenv("GMAIL_USER"),
    "SMTP_PASSWORD": os.getenv("GMAIL_APP_PASSWORD"),
    "FROM_EMAIL": os.getenv("GMAIL_USER")
}

# Utility functions
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, os.getenv("JWT_SECRET_KEY"), algorithm="HS256")
    return encoded_jwt

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, os.getenv("JWT_SECRET_KEY"), algorithms=["HS256"])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    return email

async def send_email(to_email: str, subject: str, message: str):
    try:
        msg = MIMEMultipart()
        msg['From'] = GMAIL_SETTINGS["FROM_EMAIL"]
        msg['To'] = to_email
        msg['Subject'] = subject
        
        msg.attach(MIMEText(message, 'html'))
        
        server = smtplib.SMTP(GMAIL_SETTINGS["SMTP_SERVER"], GMAIL_SETTINGS["SMTP_PORT"])
        server.starttls()
        server.login(GMAIL_SETTINGS["SMTP_USER"], GMAIL_SETTINGS["SMTP_PASSWORD"])
        server.send_message(msg)
        server.quit()
        return True
    except Exception as e:
        print(f"Email error: {e}")
        return False

# Database initialization
@app.on_event("startup")
async def startup_db():
    # Create admin user if not exists
    admin_exists = await db.admin_users.find_one({"email": os.getenv("ADMIN_EMAIL")})
    if not admin_exists:
        hashed_password = get_password_hash(os.getenv("ADMIN_PASSWORD"))
        await db.admin_users.insert_one({
            "email": os.getenv("ADMIN_EMAIL"),
            "password": hashed_password,
            "created_at": datetime.utcnow()
        })

# Public endpoints
@app.get("/")
async def root():
    return {"message": "Portfolio API is running"}

@app.post("/api/contact")
async def submit_contact(contact: ContactMessage):
    try:
        # Generate ID and timestamp
        contact.id = str(uuid.uuid4())
        contact.created_at = datetime.utcnow()
        
        # Save to database
        await db.contacts.insert_one(contact.dict())
        
        # Send email notification
        email_body = f"""
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> {contact.name}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Subject:</strong> {contact.subject}</p>
        <p><strong>Message:</strong></p>
        <p>{contact.message}</p>
        """
        
        await send_email(
            to_email=os.getenv("GMAIL_USER"),
            subject=f"Portfolio Contact: {contact.subject}",
            message=email_body
        )
        
        return {"message": "Contact message sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/projects")
async def get_projects():
    projects = []
    async for project in db.projects.find():
        project["id"] = str(project["_id"])
        del project["_id"]
        projects.append(project)
    return projects

@app.get("/api/blog")
async def get_blog_posts():
    posts = []
    async for post in db.blog_posts.find({"published": True}):
        post["id"] = str(post["_id"])
        del post["_id"]
        posts.append(post)
    return posts

@app.get("/api/skills")
async def get_skills():
    skills = []
    async for skill in db.skills.find():
        skill["id"] = str(skill["_id"])
        del skill["_id"]
        skills.append(skill)
    return skills

@app.get("/api/experience")
async def get_experience():
    experiences = []
    async for exp in db.experiences.find():
        exp["id"] = str(exp["_id"])
        del exp["_id"]
        experiences.append(exp)
    return experiences

# Admin endpoints
@app.post("/api/admin/login", response_model=Token)
async def admin_login(form_data: OAuth2PasswordRequestForm = Depends()):
    admin = await db.admin_users.find_one({"email": form_data.username})
    if not admin or not verify_password(form_data.password, admin["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=30)
    access_token = create_access_token(
        data={"sub": admin["email"]}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/api/admin/projects")
async def create_project(project: Project, current_user: str = Depends(get_current_user)):
    project.id = str(uuid.uuid4())
    project.created_at = datetime.utcnow()
    await db.projects.insert_one(project.dict())
    return {"message": "Project created successfully"}

@app.put("/api/admin/projects/{project_id}")
async def update_project(project_id: str, project: Project, current_user: str = Depends(get_current_user)):
    await db.projects.update_one({"id": project_id}, {"$set": project.dict()})
    return {"message": "Project updated successfully"}

@app.delete("/api/admin/projects/{project_id}")
async def delete_project(project_id: str, current_user: str = Depends(get_current_user)):
    await db.projects.delete_one({"id": project_id})
    return {"message": "Project deleted successfully"}

@app.post("/api/admin/blog")
async def create_blog_post(post: BlogPost, current_user: str = Depends(get_current_user)):
    post.id = str(uuid.uuid4())
    post.created_at = datetime.utcnow()
    await db.blog_posts.insert_one(post.dict())
    return {"message": "Blog post created successfully"}

@app.get("/api/admin/contacts")
async def get_contacts(current_user: str = Depends(get_current_user)):
    contacts = []
    async for contact in db.contacts.find():
        contact["id"] = str(contact["_id"])
        del contact["_id"]
        contacts.append(contact)
    return contacts

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)