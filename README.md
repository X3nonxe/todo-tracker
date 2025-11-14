# Todo Tracker

A full-stack todo tracking application built with Node.js/Express backend and Next.js frontend.

## Features

- **Backend**: REST API built with Node.js, Express, Sequelize, and SQLite
- **Frontend**: Modern React application using Next.js App Router
- **CRUD Operations**: Create, read, update, and delete todos
- **Responsive Design**: Clean UI with Tailwind CSS

## Tech Stack

### Backend
- Node.js (ESM)
- Express.js
- Sequelize ORM
- SQLite database

### Frontend
- Next.js 14 (App Router)
- React 18
- Tailwind CSS

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
2. Install dependencies:
   ```bash
   npm install
3. Set up environment variables:
   ```bash
   cp .env.example
4. Run database migrations:
   ```bash
   npx sequelize-cli db:migrate
5. Start the development server:
   ```bash
   npm run dev
The backend will run on http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm run dev
The frontend will run on http://localhost:3000

## API Endpoints

### Todos
* GET /todos - Get all todos
* POST /todos - Create a new todo
* PUT /todos/:id - Update a todo
* DELETE /todos/:id - Delete a todo

### Todo Model
```bash
{
  id: Integer (auto increment),
  title: String (required),
  description: String (optional),
  completed: Boolean (default: false),
  createdAt: Date,
  updatedAt: Date
}
```

## Design Decisions

### Backend

- Sequelize with SQLite: Chosen for simplicity and ease of development
- ES Modules: Used for modern JavaScript import/export syntax
- RESTful API: Standard REST conventions for CRUD operations
- Input Validation: Comprehensive validation on both client and server side
- Error Handling: Consistent error responses with appropriate HTTP status codes

### Frontend

- Next.js App Router: Utilized for modern React development with server components capability
- Client-side Rendering: All todo operations happen on the client for better UX
- Tailwind CSS: For rapid UI development and consistent styling
- Error Boundaries: Basic error handling for API calls

## Potential Improvements

1. Authentication: Add user authentication and authorization
2. Pagination: Add pagination for large todo lists
3. Search & Filter: Implement search and filter functionality
4. Database: Switch to PostgreSQL for production use
5. Caching: Implement Redis for caching frequently accessed data
6. Monitoring: Add logging and monitoring solutions

## Development Notes

- The backend uses SQLite for development simplicity
- CORS is not configured as frontend and backend are separate
- Error handling includes both client-side and server-side validation
- The application follows RESTful principles
