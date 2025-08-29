
# 📚 Bookstore Management System

A **full-stack MERN (MongoDB, Express, React, Node.js)** application for managing a bookstore.  
Users can browse books, register/login, and admins can perform CRUD operations on books.

---

## ✨ Features
- 👤 User Authentication (Register / Login with JWT)  
- 📚 Book Management (Add, Update, Delete, View)  
- 🔍 Search & Filter Books  
- 🛒 Checkout System  
- 🖥️ Admin Dashboard for managing books  

---

## 🛠️ Tech Stack
**Frontend:** React.js, Tailwind CSS, Axios  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Mongoose)  
**Other Tools:** dotenv, CORS  

---

## 📂 Project Structure

Bookstore/
├── backend/
│ ├── controller/ # Request handlers
│ ├── model/ # Database schemas
│ ├── route/ # API routes
│ ├── index.js # Backend entry point
│ └── .env # Environment variables
│
├── frontend/
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Application pages
│ │ └── App.js # Main React app
│ └── package.json
│
└── README.md

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/kumar-aryan-s/bookstoreApp
cd bookstore


2️⃣ Backend Setup
cd backend
npm install

Create a .env file inside backend/:
PORT=4000
MongoDBURI=your-mongodb-connection-string
JWT_SECRET=your-secret-key

Start the backend:

npm start


3️⃣ Frontend Setup
cd frontend
npm install
npm start




