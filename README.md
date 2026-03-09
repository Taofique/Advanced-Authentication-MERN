# 🔐 Advanced Authentication — MERN Stack

A full-stack authentication system built with the MERN stack (MongoDB, Express, React, Node.js), featuring two-factor authentication (2FA) and secure user management.

---

## ✨ Features

- **User Registration & Login** — Secure sign-up and sign-in with hashed passwords
- **Two-Factor Authentication (2FA)** — Enhanced account security via OTP/authenticator
- **JWT-Based Sessions** — Stateless authentication using JSON Web Tokens
- **Password Reset** — Email-based password recovery flow
- **Protected Routes** — Frontend route guards for authenticated users only
- **Responsive UI** — Clean React frontend for seamless user experience

---

## 🛠️ Tech Stack

### Backend

- **Node.js** + **Express.js** — REST API server
- **MongoDB** + **Mongoose** — Database and ODM
- **bcryptjs** — Password hashing
- **jsonwebtoken** — JWT generation and verification
- **nodemailer** — Email sending for password reset / OTP

### Frontend

- **React** — Component-based UI
- **React Router** — Client-side routing
- **Axios** — HTTP requests to the API

---

## 📁 Project Structure

```
Advanced-Authentication-MERN/
├── backend/
│   ├── controllers/       # Route handler logic
│   ├── models/            # Mongoose schemas
│   ├── routes/            # Express route definitions
│   ├── middleware/        # Auth middleware (JWT verification)
│   ├── utils/             # Helper functions (email, token gen)
│   └── server.js          # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Login, Register, Dashboard, etc.
│   │   ├── context/       # Auth context / state management
│   │   └── App.jsx        # Root component & routing
│   └── index.html
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/Taofique/Advanced-Authentication-MERN.git
cd Advanced-Authentication-MERN
```

### 2. Set up the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d

# Email config (for OTP / password reset)
EMAIL_HOST=smtp.yourprovider.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

Start the backend server:

```bash
npm run dev
```

### 3. Set up the Frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend dev server:

```bash
npm run dev
```

### 4. Open in your browser

```
http://localhost:5173
```

---

## 🔑 Authentication Flow

1. **Register** — User submits credentials; password is hashed and stored
2. **Login** — Credentials validated; JWT issued on success
3. **2FA** — OTP sent via email; user verifies before gaining full access
4. **Protected Access** — JWT attached to requests; middleware validates on each protected route
5. **Password Reset** — Reset link emailed; token verified before allowing password update

---

## 📬 API Endpoints

| Method | Endpoint                    | Description                  |
| ------ | --------------------------- | ---------------------------- |
| POST   | `/api/auth/register`        | Register a new user          |
| POST   | `/api/auth/login`           | Login and receive JWT        |
| POST   | `/api/auth/verify-2fa`      | Verify 2FA OTP               |
| POST   | `/api/auth/forgot-password` | Request password reset email |
| POST   | `/api/auth/reset-password`  | Reset password with token    |
| GET    | `/api/auth/me`              | Get current user (protected) |

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change.

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ by [Taofique](https://github.com/Taofique)
