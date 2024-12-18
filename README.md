# Task Manager Backend

This is the backend for the Task Manager application, built using Node.js, Express, and MongoDB. It provides a RESTful API to manage tasks, including creating, reading, updating, and deleting tasks.

## Features

- **Create Tasks**: Add new tasks with details like title, description, due date, status, and priority.
- **Read Tasks**: Fetch all tasks or specific tasks by ID.
- **Update Tasks**: Edit task details.
- **Delete Tasks**: Remove tasks from the database.
- **User Authentication**: Secure endpoints using JWT authentication.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rishigautam5474/magnet-task-backend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd task-manager-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory.
2. Add the following environment variables:
   ```env
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/taskmanager
   JWT_SECRET=your_jwt_secret
   ```

## Usage

### Start the Server

Run the server in development mode:

```bash
npm start
```

The server will start on `http://localhost:5000`.

### API Endpoints

#### Authentication

- `POST /api/auth/register`: Register a new user.

  - **Request Body**:
    ```json
    {
      "name": "string",
      "email": "string",
      "password": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "status": "success",
      "message": "Successfully user registered",
      "user": {
        "name": "string",
        "email": "string",
        "password": "string",
        "yourtaskids": [],
        "_id": "String",
        "__v": 0
      }
    }
    ```

- `POST /api/auth/login`: Log in a user.
  - **Request Body**:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "status": "success",
      "message": "name is login successfully",
      "token": "token",
      "user": {
        "id": "string",
        "name": "string"
      }
    }
    ```

#### Tasks

- `GET /api/tasks`: Fetch all tasks (requires authentication).

  - **Response**:
    ```json
    [
      {
        "id": "string",
        "title": "string",
        "description": "string",
        "dueDate": "date",
        "status": "string",
        "priority": "string"
      }
    ]
    ```

- `GET /api/users/task-lists`: Fetch a single task by ID (requires authentication).

  - **Response**:
    ```json
    {
      "status": "success",
      "message": "Tasks found successfully",
      "tasks": [
        {
          "_id": "string",
          "title": "string",
          "description": "string",
          "dueDate": "date",
          "priority": "string",
          "status": "string",
          "userid": "userid",
          "createdAt": "date",
          "updatedAt": "date",
          "__v": 0
        }
      ]
    }
    ```

- `POST /api/tasks`: Create a new task (requires authentication).

  - **Request Body**:
    ```json
    {
      "title": "string",
      "description": "string",
      "dueDate": "date",
      "status": "string",
      "priority": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Task created successfully",
      "task": {
        "id": "string",
        "title": "string",
        "description": "string",
        "dueDate": "date",
        "status": "string",
        "priority": "string"
      }
    }
    ```

- `PUT /api/tasks/:id`: Update a task by ID (requires authentication).

  - **Request Body**:
    ```json
    {
      "title": "string",
      "description": "string",
      "dueDate": "date",
      "status": "string",
      "priority": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Task updated successfully",
      "task": {
        "id": "string",
        "title": "string",
        "description": "string",
        "dueDate": "date",
        "status": "string",
        "priority": "string"
      }
    }
    ```

- `DELETE /api/tasks/:id`: Delete a task by ID (requires authentication).
  - **Response**:
    ```json
    {
      "message": "Task deleted successfully",
      "taskId": "string"
    }
    ```

## Project Structure

```plaintext
├── models          # Mongoose models
├── routes          # Express route handlers
├── controllers     # Request handlers and business logic
├── middlewares     # Custom middleware (e.g., authentication)
├── utils           # Utility functions
├── config          # Configuration files
├── server.js       # Entry point
└── package.json    # Project dependencies and scripts
```

## Dependencies

- **express**: Web framework for Node.js.
- **mongoose**: MongoDB object modeling tool.
- **jsonwebtoken**: JWT-based authentication.
- **dotenv**: Manage environment variables.
- **nodemon**: Development utility for automatic server restarts.
