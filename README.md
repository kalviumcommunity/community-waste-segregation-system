# Community-Driven Waste Segregation Reporting System

## 📌 Project Overview
The **Community-Driven Waste Segregation Reporting System** is a cloud-native web application designed to improve waste segregation at the source. It enables collaboration between households, waste collectors, and municipal authorities through real-time reporting, analytics, and community visibility.

This repository contains the **High-Level Design (HLD)** and architectural planning for **Sprint #1**, built using **Next.js (TypeScript)** and deployed on **AWS**.

---

## 🎯 Problem Statement
Municipal waste management systems struggle to enforce and monitor waste segregation due to:
- Lack of real-time data  
- Low citizen engagement  
- Weak accountability mechanisms  

This leads to mixed waste collection, inefficient recycling, and increased landfill usage.

---

## 🚀 Project Goal
To design a **community-driven digital platform** that:
- Tracks waste segregation at the source  
- Encourages positive behavior through visibility and feedback  
- Provides actionable insights to municipal authorities  

---

## 🧱 High-Level Architecture (Sprint #1)

The system follows a **layered cloud-native architecture**:

### Frontend (UI Layer)
- Next.js (TypeScript)
- App Router
- Server & Client Components
- Tailwind CSS
- Role-based UI (Citizen, Collector, Admin)

### Backend (API & Business Logic)
- Next.js API Routes
- Server Actions
- Authentication & authorization
- Business logic and data processing

### Database Layer
- PostgreSQL
- Prisma ORM
- Conceptual entities:
  - User
  - Household
  - WasteReport
  - Community
  - Role

### Caching Layer
- Redis
- Cached data:
  - Community scores
  - Dashboard analytics
  - Session data

### Cloud Infrastructure
- AWS
  - EC2 / App Runner (hosting)
  - RDS (PostgreSQL)
  - ElastiCache (Redis)
  - S3 (object storage)
- Docker (containerization)
- GitHub Actions (CI/CD)

---

## 🔄 Data Flow (High-Level)

---

## 🛠️ Technology Stack

**Frontend**
- Next.js (TypeScript)
- Tailwind CSS

**Backend**
- Next.js API Routes
- Server Actions

**Database**
- PostgreSQL
- Prisma ORM

**Caching**
- Redis

**DevOps**
- Docker
- GitHub Actions

**Cloud**
- AWS (EC2/App Runner, RDS, S3, ElastiCache)

---

## 👥 Team Members & Roles

| Name | Role | Responsibilities |
|---|---|---|
| Sharon Emmanuel S.R | Project Manager & UI/UX Designer | Sprint planning, wireframes, user flows, usability testing, documentation |
| Mudu Tejal Nayak | Frontend Developer | UI development, dashboard implementation, frontend integration |
| Sarvesh Bhoopathi Ramana | Backend Developer & QA Lead | API design, database schema, testing, quality assurance |

---

## 📁 Repository Structure (Planned)
