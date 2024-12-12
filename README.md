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
   git clone https://github.com/yourusername/task-manager-backend.git
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
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/taskmanager
   JWT_SECRET=your_jwt_secret
   ```

## Usage

### Start the Server
Run the server in development mode:
```bash
npm run dev
```

Run the server in production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`.

### API Endpoints

#### Authentication
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in a user.

#### Tasks
- `GET /api/tasks`: Fetch all tasks (requires authentication).
- `GET /api/tasks/:id`: Fetch a single task by ID (requires authentication).
- `POST /api/tasks`: Create a new task (requires authentication).
- `PUT /api/tasks/:id`: Update a task by ID (requires authentication).
- `DELETE /api/tasks/:id`: Delete a task by ID (requires authentication).

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

## Development

### Linting
Use ESLint to check for coding style issues:
```bash
npm run lint
```

### Testing
Run unit and integration tests:
```bash
npm test
```

## Contributing

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
