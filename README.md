# EduFlow

EduFlow is a website created to support educational purposes, specifically for "process operatører". The platform handles inventory management, team tracking, QR labels and scanning, and most importantly, the processes users go through.

---

## Tech Stack

### Backend
- C# with .NET 9  
- ASP.NET Core (Web API)  
- Entity Framework Core 9  
- PostgreSQL (via Npgsql provider)  
- Swagger/OpenAPI for API documentation  

### Frontend
- React 19 + React DOM  
- React Router DOM 7 (routing)  
- React Icons (icon library)  
- Vite (build tool & dev server)  
- TypeScript types included  
- ESLint (linting)

---

## Getting Started

Follow these instructions to get the project running locally for development and testing purposes.

### Prerequisites
- Node.js v18+  
- npm (comes with Node.js)  
- .NET 9 SDK  
- PostgreSQL (local installation)  

---

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend-folder-name
2. Ensure the database exists:
Open PostgreSQL and create a database named eduflow.
Tables will be automatically created using Entity Framework Core migrations.

3. Run the backend server:
   ```bash
   dotnet run

4. Swager documentaion is available at:
    ```bash
    http://localhost:<PORT>/swagger



### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm run dev

4. Open the provided local URL (will be a link in terminal) to view the website 
   


### Environment Variables

There are .env files in both backend and frontend folders.
Currently, these files have placeholder values. Update them as needed before deployment.


### Troubleshooting

Frontend not loading → Ensure dependencies are installed (npm install) and you’re in the correct folder.
Backend database connection errors → Make sure PostgreSQL is running locally and the database eduflow exists.


### Contribution
Just don't contribute unless contact with developer.
