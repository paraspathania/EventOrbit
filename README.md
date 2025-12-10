🎟️ EventTix – MERN Event Booking System
A Complete Multi‑Panel Event Management & Ticket Booking Platform

<p align="center"> <img src="https://img.shields.io/badge/MERN-Full%20Stack-green?style=for-the-badge" /> <img src="https://img.shields.io/badge/Version-1.0-blue?style=for-the-badge" /> <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" /> </p> <p align="center"> <strong>⚡ User Panel • 🎤 Organizer Panel • 🛠 Admin Panel</strong><br/> Built with <strong>MERN Stack + TailwindCSS</strong> </p>
📌 Overview
EventTix is a full-featured MERN application that allows users to browse events, book tickets, manage wallets, and download QR‑coded tickets.
Organizers can create and manage events, while admins oversee event approval, user management, payments, and platform integrity.

This project is designed with modular architecture, role-based access, and scalable folder structure.

✨ Features
👤 User Panel
🔍 Browse & search events

📄 Event details page

🪑 Seat selection interface

🎟 Ticket booking with QR generator

👛 Wallet (add money, transactions)

📁 My Tickets page

⭐ Rating & Review system

🙍 Profile management

🧑‍💼 Organizer Panel
📊 Organizer dashboard

🎫 Create new events

🛠 Manage listed events

🔴 Live seat monitoring

👥 Attendee list view

📈 Reports & analytics

🛡 Admin Panel
📝 Verify organizers

✔ Approve / Reject events

👤 Manage users & organizers

💳 Manage payments & refunds

🏟 Venue management

📉 Admin dashboard insights

🧱 Tech Stack
👨‍💻 Frontend
React (Vite)

Tailwind CSS

React Router

Axios

Context API (Auth & State)

🖥 Backend
Node.js + Express

MongoDB + Mongoose

JWT authentication

Multer (uploads)

bcrypt (password hashing)

🗂 Project Structure
event-booking-system/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── utils/
│   └── server.js
│
└── frontend/
    ├── user/
    ├── organizer/
    └── admin/
🚀 Setup Instructions
🛠 Backend Setup
cd backend
npm install
Create .env file:

MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=5000
Start server:

npm run dev
💻 Frontend Setup (User Panel example)
cd frontend/user
npm install
npm run dev
Repeat for:

frontend/organizer
frontend/admin
🔗 API Base URL
http://localhost:5000/api
📸 Screenshots (Add your UI here later)
🖼️ You can replace these with your project images once UI is ready.

📍 Home Page
📍 Event Details
📍 Seat Selection
📍 Booking / Ticket Page
📍 Wallet
📍 Organizer Dashboard
📍 Admin Panel
📘 Future Enhancements
🔔 Realtime seats update using Socket.io

💳 Razorpay / Stripe Integration

📡 Email notifications

🤝 Organizer payout settlements

🌙 Dark Mode UI

👨‍💻 Authors
Paras Pathania, Prince Kumar, Anuj Ingole
Full Stack MERN Developers