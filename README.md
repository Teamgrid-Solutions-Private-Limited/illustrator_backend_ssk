# Illustrator Backend

A Node.js backend API for user authentication and management, built with Express, MongoDB, and JWT.

## Features

- User registration and login with hashed passwords
- JWT-based authentication
- MongoDB integration via Mongoose
- CORS support
- Environment variable configuration

## Tech Stack

- Node.js
- Express
- MongoDB & Mongoose
- JWT (`jsonwebtoken`)
- Password hashing (`bcryptjs`)
- CORS
- dotenv

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB instance (Atlas)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Go-Digital-Alchemy-Repos/Illustrata-Embed-Backend.git
   cd Illustrata-Embed-Backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   PORT=5454
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

### Running the Server

```sh
npm start
```

Server runs on the port specified in `.env` (default: 5454).

## API Endpoints

### Auth Routes

- `POST /api/auth/register`  
  Register a new user.  
  **Body:** `{ name, email, password }`

- `POST /api/auth/login`  
  Login with email and password.  
  **Body:** `{ email, password }`

## Project Structure

```
.
├── config/
│   └── db.js
├── controllers/
│   └── authController.js
├── models/
│   └── user.js
├── routes/
│   └── authRoutes.js
├── utils/
│   └── generateToken.js
├── server.js
├── package.json
└── .env
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with clear messages.
4. Push your branch to your fork.
5. Open a pull request describing your changes.

Please ensure your code follows the project's style and includes relevant tests. For major changes, open an issue first to discuss what you would like to change.
