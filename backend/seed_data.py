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
        "title": "Digital Certificate Management System",
        "description": "A full-stack digital certificate management system built with React.js and Flask. Features include secure certificate generation, validation, and management with user authentication and admin dashboard.",
        "technologies": ["React", "Flask", "MongoDB", "Python", "JavaScript"],
        "image_url": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
        "github_url": "https://github.com/yogeshmagatam/Digital-Certificate-Management-System",
        "live_url": "#",
        "featured": True,
        "created_at": datetime(2023, 12, 1)
    },
    {
        "id": "2",
        "title": "Pi Ads",
        "description": "An innovative application that helps display ads on screens using Raspberry Pi. Features include remote ad management, scheduling, and real-time content updates for digital signage solutions.",
        "technologies": ["Python", "Raspberry Pi", "Linux", "GPIO"],
        "image_url": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
        "github_url": "https://github.com/yogeshmagatam/Pi-Ads",
        "live_url": "#",
        "featured": True,
        "created_at": datetime(2023, 11, 15)
    },
    {
        "id": "3",
        "title": "Portfolio Website",
        "description": "A modern, responsive portfolio website built with React and FastAPI. Features include dark mode, animations, contact form, and admin dashboard for content management.",
        "technologies": ["React", "FastAPI", "MongoDB", "Tailwind CSS", "Framer Motion"],
        "image_url": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
        "github_url": "https://github.com/yogeshmagatam/portfolio-website",
        "live_url": "#",
        "featured": False,
        "created_at": datetime(2023, 10, 20)
    }
]

SAMPLE_BLOG_POSTS = [
    {
        "id": "1",
        "title": "Building Digital Certificate Management System with React and Flask",
        "content": "In this comprehensive guide, I'll walk you through the process of building a secure digital certificate management system using React for the frontend and Flask for the backend...",
        "excerpt": "Learn how to build secure digital certificate management systems using React and Flask with best practices.",
        "image_url": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
        "tags": ["React", "Flask", "Python", "Web Development", "Security"],
        "published": True,
        "created_at": datetime(2023, 12, 15)
    },
    {
        "id": "2",
        "title": "IoT Development with Raspberry Pi: Building Pi Ads Application",
        "content": "Explore the exciting world of IoT development with Raspberry Pi. Learn how to build applications that interact with hardware and create digital signage solutions...",
        "excerpt": "Discover how to build IoT applications using Raspberry Pi for digital signage and automation.",
        "image_url": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
        "tags": ["Raspberry Pi", "IoT", "Python", "Hardware", "Automation"],
        "published": True,
        "created_at": datetime(2023, 12, 10)
    }
]

SAMPLE_SKILLS = [
    {"id": "1", "name": "Python", "category": "languages", "level": 5, "icon": "python"},
    {"id": "2", "name": "JavaScript", "category": "languages", "level": 5, "icon": "javascript"},
    {"id": "3", "name": "React", "category": "frontend", "level": 5, "icon": "react"},
    {"id": "4", "name": "Flask", "category": "backend", "level": 5, "icon": "flask"},
    {"id": "5", "name": "MongoDB", "category": "database", "level": 4, "icon": "mongodb"},
    {"id": "6", "name": "Raspberry Pi", "category": "iot", "level": 4, "icon": "raspberrypi"},
    {"id": "7", "name": "FastAPI", "category": "backend", "level": 4, "icon": "fastapi"},
    {"id": "8", "name": "Tailwind CSS", "category": "frontend", "level": 4, "icon": "tailwind"},
]

SAMPLE_EXPERIENCES = [
    {
        "id": "1",
        "company": "Still in Search",
        "position": "Full Stack Developer",
        "description": "Actively seeking opportunities to apply my skills in React, Python, and IoT development. Passionate about building innovative solutions and contributing to meaningful projects.",
        "start_date": "2024-01",
        "end_date": None,
        "technologies": ["React", "Python", "Flask", "MongoDB", "Raspberry Pi"]
    },
    {
        "id": "2",
        "company": "Student Projects",
        "position": "Software Developer",
        "description": "Built innovative projects including Digital Certificate Management System and Pi Ads application. Focused on practical problem-solving and modern web technologies.",
        "start_date": "2022-01",
        "end_date": "2023-12",
        "technologies": ["React", "Flask", "Python", "MongoDB", "Raspberry Pi"]
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