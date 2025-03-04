# EduFlow
A web-based process management system for teachers and students. Features include user management, barcode-based inventory logging (Code39), a production schedule, and batch report sharing. Teachers can add/remove students, track inventory, and share Excel reports online, reducing paperwork and emails.


# Inventory Process System (Docker Setup)

## 🚀 Features
- **MariaDB Database** for inventory management  
- **PHP + Apache Backend** for handling requests  
- **phpMyAdmin** for easy database management  
- **Optional Nginx Frontend** for UI  

---

Inventory Process System (Docker Setup)
This project is a web-based process management system for teachers and students. It includes user management, barcode-based inventory logging (Code39), a production schedule, and batch report sharing.

🚀 Features
MariaDB Database for inventory management
PHP + Apache Backend for handling requests
phpMyAdmin for easy database management
Optional Nginx Frontend for UI
🛠️ Getting Started
1️⃣ Prerequisites
Ensure you have Docker and Docker Compose installed.
Download Docker

2️⃣ Clone the Repository
git clone https://github.com/your-username/your-repo.git  
cd your-repo  
3️⃣ Run the Containers

docker-compose up -d  
4️⃣ Access the Services
phpMyAdmin: http://localhost:8080
Backend (PHP + Apache): http://localhost:8000
Frontend (if used): http://localhost:3000
📂 Project Structure
bash

/backend            # PHP Backend (Code goes here)  
/frontend           # Frontend UI (Optional)  
/docker-compose.yml # Docker configuration  
🛑 Stopping the Containers
To stop the running containers, use:

docker-compose down  
To remove all containers and volumes (⚠ Deletes database data!):

docker-compose down -v  
🐳 Useful Docker Commands
Check running containers:

docker ps  
Restart a container:


docker restart <container_name>  
View logs:


docker logs <container_name>  
