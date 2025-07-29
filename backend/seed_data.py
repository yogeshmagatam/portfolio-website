import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

# Sample data
SAMPLE_PROJECTS = [
    {
        "id": "1",
        "title": "E-Commerce Platform",
        "description": "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing with Stripe, real-time inventory management, and admin dashboard.",
        "technologies": ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
        "image_url": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
        "github_url": "https://github.com/johndoe/ecommerce-platform",
        "live_url": "https://ecommerce-demo.johndoe.com",
        "featured": True,
        "created_at": datetime(2023, 12, 1)
    },
    {
        "id": "2",
        "title": "Task Management App",
        "description": "A collaborative task management application with real-time updates using Socket.io. Built with Vue.js frontend and Python FastAPI backend with PostgreSQL database.",
        "technologies": ["Vue.js", "Python", "FastAPI", "PostgreSQL", "Socket.io"],
        "image_url": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
        "github_url": "https://github.com/johndoe/task-manager",
        "live_url": "https://tasks.johndoe.com",
        "featured": True,
        "created_at": datetime(2023, 11, 15)
    },
    {
        "id": "3",
        "title": "Weather Dashboard",
        "description": "A beautiful weather dashboard with data visualization using D3.js. Integrates with OpenWeather API to provide real-time weather data and forecasts with interactive charts.",
        "technologies": ["React", "D3.js", "OpenWeather API", "Chart.js"],
        "image_url": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
        "github_url": "https://github.com/johndoe/weather-dashboard",
        "live_url": "https://weather.johndoe.com",
        "featured": False,
        "created_at": datetime(2023, 10, 20)
    }
]

SAMPLE_BLOG_POSTS = [
    {
        "id": "1",
        "title": "Building Scalable Web Applications with React and Node.js",
        "content": "In this comprehensive guide, I'll walk you through the process of building scalable web applications using React for the frontend and Node.js for the backend...",
        "excerpt": "Learn how to build scalable web applications using modern technologies and best practices.",
        "image_url": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
        "tags": ["React", "Node.js", "JavaScript", "Web Development"],
        "published": True,
        "created_at": datetime(2023, 12, 15)
    },
    {
        "id": "2",
        "title": "The Future of Web Development: Trends to Watch in 2024",
        "content": "As we move into 2024, the web development landscape continues to evolve rapidly. Here are the key trends that will shape the future...",
        "excerpt": "Explore the latest trends and technologies shaping the future of web development.",
        "image_url": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
        "tags": ["Web Development", "Technology", "Trends", "Future"],
        "published": True,
        "created_at": datetime(2023, 12, 10)
    }
]

SAMPLE_SKILLS = [
    {"id": "1", "name": "JavaScript", "category": "languages", "level": 5, "icon": "javascript"},
    {"id": "2", "name": "Python", "category": "languages", "level": 5, "icon": "python"},
    {"id": "3", "name": "React", "category": "frontend", "level": 5, "icon": "react"},
    {"id": "4", "name": "Node.js", "category": "backend", "level": 5, "icon": "nodejs"},
    {"id": "5", "name": "MongoDB", "category": "database", "level": 4, "icon": "mongodb"},
    {"id": "6", "name": "PostgreSQL", "category": "database", "level": 4, "icon": "postgresql"},
    {"id": "7", "name": "AWS", "category": "cloud", "level": 4, "icon": "aws"},
    {"id": "8", "name": "Docker", "category": "tools", "level": 4, "icon": "docker"},
]

SAMPLE_EXPERIENCES = [
    {
        "id": "1",
        "company": "TechCorp Inc.",
        "position": "Senior Full Stack Developer",
        "description": "Led development of microservices architecture serving 1M+ users. Mentored junior developers and established coding standards.",
        "start_date": "2022-01",
        "end_date": None,
        "technologies": ["React", "Node.js", "AWS", "MongoDB"]
    },
    {
        "id": "2",
        "company": "StartupXYZ",
        "position": "Full Stack Developer",
        "description": "Built the core platform from scratch, implemented CI/CD pipelines, and reduced deployment time by 60%.",
        "start_date": "2020-03",
        "end_date": "2021-12",
        "technologies": ["Vue.js", "Python", "PostgreSQL", "Docker"]
    }
]

async def seed_database():
    client = AsyncIOMotorClient(os.getenv("MONGO_URL"))
    db = client.portfolio_db
    
    # Clear existing data
    await db.projects.delete_many({})
    await db.blog_posts.delete_many({})
    await db.skills.delete_many({})
    await db.experiences.delete_many({})
    
    # Insert sample data
    await db.projects.insert_many(SAMPLE_PROJECTS)
    await db.blog_posts.insert_many(SAMPLE_BLOG_POSTS)
    await db.skills.insert_many(SAMPLE_SKILLS)
    await db.experiences.insert_many(SAMPLE_EXPERIENCES)
    
    print("Database seeded successfully!")
    client.close()

if __name__ == "__main__":
    asyncio.run(seed_database())