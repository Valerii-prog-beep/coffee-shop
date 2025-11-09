# ☕ Coffee Shop Management System

A full-stack web application for managing a coffee shop menu, built with modern technologies and microservices architecture.

![Tech Stack](https://img.shields.io/badge/tech-stack-blue)
![Docker](https://img.shields.io/badge/docker-ready-green)

## 🚀 Features

- **Product Catalog** - Browse coffee, tea, desserts, and breakfast items
- **Category Management** - Organized menu with categories and filtering
- **Responsive Design** - Mobile-friendly interface
- **REST API** - Full CRUD operations for products and categories
- **Containerized** - Docker-based deployment

## 🛠 Tech Stack

### Frontend
- **React** + **TypeScript** - Modern UI development
- **Tailwind CSS** - Responsive styling
- **Vite** - Fast build tool

### Backend  
- **Spring Boot** - REST API framework
- **Java 17** - Core programming language
- **JPA/Hibernate** - ORM and database management
- **MySQL** - Relational database

### DevOps & Infrastructure
- **Docker** - Containerization
- **Docker Compose** - Multi-service orchestration
- **Nginx** - Reverse proxy and static file serving
- **MySQL** - Database service

## 📁 Project Structure
coffee-shop/
├── frontend/ # React + TypeScript application
│ ├── src/
│ ├── public/
│ ├── Dockerfile
│ └── nginx.conf
├── backend/ # Spring Boot application
│ ├── src/
│ ├── Dockerfile
│ └── application.properties
├── database/ # Database scripts
│ └── init/
│ ├── 01_create_database.sql
│ ├── 02_create_tables.sql
│ └── 03_insert_sample_data.sql
└── docker-compose.yml # Multi-service configuration


## 🏃‍♂️ Quick Start

### Prerequisites
- Docker
- Docker Compose

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone https://github.com/Valerii-prog-beep/coffee-shop.git
   cd coffee-shop

2.   Start the application
     docker-compose up --build

3. Access the application

   Frontend: http://localhost:3000

   Backend API: http://localhost:8080/api

   Database: localhost:3307 (MySQL)

API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/categories	Get all categories
GET	/api/products/{id}	Get product by ID
GET	/api/categories/{id}	Get category by ID

Docker Services
The application consists of three main services:

frontend: React application served by Nginx (port 3000)

backend: Spring Boot REST API (port 8080)

db: MySQL database with sample data (port 3307)

🎯 Key Features Demonstrated
Microservices Architecture - Independent frontend/backend services

Containerization - Docker-based development and deployment

RESTful API Design - Clean API structure and endpoints

Database Management - JPA entities, migrations, and seed data

Modern Frontend - React with TypeScript and responsive design

Production Setup - Nginx configuration and service orchestration

👨‍💻 Development
Backend Development
bash
cd backend
mvn spring-boot:run
Frontend Development
bash
cd frontend
npm install
npm run dev
📊 Database Schema
The application uses a relational database with:

categories - Product categories (Coffee, Tea, Desserts, Breakfast)

products - Menu items with prices, descriptions, and images

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

📧 Contact
Valerii Bogovich - valerii_bogovich87@mail.ru

Project Link: https://github.com/Valerii-prog-beep/coffee-shop











