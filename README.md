# EduFlow
A web-based process management system for teachers and students. Features include user management, barcode-based inventory logging (Code39), a production schedule, and batch report sharing. Teachers can add/remove students, track inventory, and share Excel reports online, reducing paperwork and emails.


# Inventory Process System (Docker Setup)

---

## 🛠️ Getting Started

### **Prerequisites**
Ensure you have **Docker** and **Docker Compose** installed.  
[Download Docker](https://www.docker.com/get-started)

### **Clone the Repository**
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo 
```

### **Run the docker container**
```sh
docker-compose up -d
```

### **Stop the docker container**
```To stop the running container, use:
docker-compose down
```

```To remove all containers and volumes, use:
docker-compose down -v
```


### **Access the project**
phpMyAdmin: http://localhost:8080
Backend (PHP + Apache): http://localhost:8000
Frontend (if used): http://localhost:3000
