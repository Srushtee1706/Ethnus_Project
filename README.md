# 🎟 EventEase – Event Management App

**EventEase** is a full-stack MERN application (MongoDB, Express.js, React, Node.js) developed as part of the **ETHUS MERN Stack Certification**.
It allows users to create, browse, manage, and purchase tickets for events with user authentication, cart & purchase management, and Google Calendar integration.

---

## 🚀 One-Line Description

> **A complete MERN stack event management system with authentication, ticket booking, cart, purchases, and calendar integration.**

---

## 🖥️ Project Structure

```
root/
│
├── frontend/      # React + Vite frontend
│
└── backend/       # Node.js + Express backend
```

---

# 🚀 Frontend

## 📌 Tech Stack

* **React** with **Vite** for fast bundling and HMR
* **ESLint** for linting
* **Axios** for HTTP requests
* LocalStorage for cart & token storage

## ▶ Getting Started

Navigate to the frontend directory:

```bash
cd frontend
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build locally

```bash
npm run preview
```

## 🚦 ESLint

This project includes a basic ESLint configuration.
For production, consider using **TypeScript** with type-aware linting.

---

# 🛠 Backend

## 📌 Tech Stack

* **Node.js** + **Express.js**
* **MongoDB** for data storage
* **JWT** for authentication
* MVC folder structure

## ▶ Getting Started

Navigate to the backend directory:

```bash
cd backend
```

### Install dependencies

```bash
npm install
```

### Start the server

```bash
npm start
```

(or `node server.js` if you configured without scripts)

---

## 📂 Backend Folder Structure

```
backend/
│
├── server.js        # Entry point
│
├── config/          # DB & environment config
│
├── controllers/     # Request handlers
│
├── middleware/      # Auth, error handling
│
├── models/          # Mongoose schemas
│
├── routes/          # API routes
│
└── node_modules/
```

---

# 📆 How It Works

## 🔐 Authentication

* Login & registration handled via:

  * `POST /api/auth/login`
  * `POST /api/auth/register`
* JWT tokens stored in `localStorage` and used for protected endpoints.

## 📅 Event Management

* Users or admins can **create, update, delete, and list events** via:

  * `POST /api/events`
  * `PUT /api/events/:id`
  * `DELETE /api/events/:id`
  * `GET /api/events`
* Managed through `EventForm.jsx` and `Events.jsx`.

## 🛒 Cart & Ticket Purchase

* Cart stored in `localStorage`.
* Increment/decrement ticket quantities or remove events from cart.
* Purchase triggers:

  * `POST /api/events/buy/:id` (validate & decrement tickets)
  * `POST /api/purchases` (record transaction)
  * Clears cart & shows notification.

## 📆 Google Calendar Integration

* Each event can be added to Google Calendar via generated query link.

---

# 💻 Project Frontend Structure

```
src/
├── components/
│   └── EventForm.jsx
├── pages/
│   ├── Cart.jsx
│   ├── Events.jsx
│   ├── Purchases.jsx
│   ├── Login.jsx
│   └── Register.jsx
├── App.jsx
└── index.js
```

---

# 🚀 Features

* 🔐 **User Authentication** – Register & login securely
* 📅 **Event CRUD** – Create, update, delete, and list events
* 🛒 **Cart Management** – Manage tickets & quantities
* 💳 **Purchase Flow** – Complete ticket purchases
* 📆 **Google Calendar Integration** – Add events to your calendar

---

# 🛡 Tech Summary

| Frontend | Backend         | Storage      |
| -------- | --------------- | ------------ |
| React    | Node.js/Express | MongoDB      |
| Vite     | JWT (auth)      | LocalStorage |
| Axios    | Mongoose        |              |

---

# 🏗 Setup Summary

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
npm install
npm start
```

Ensure your backend server exposes:

```
POST /api/auth/login
POST /api/auth/register
GET  /api/events
POST /api/events
PUT  /api/events/:id
DELETE /api/events/:id
POST /api/events/buy/:id
POST /api/purchases
GET  /api/purchases
```

---

# 🌱 Future Improvements

* Role-based access control (Admin/User)
* Payment integration (Stripe/Razorpay)
* Event image upload
* Responsive UI (e.g., Tailwind CSS)

---

# ✍ Author

* **Srushtee Patil**

# 📝 Submitted to

* **ETHUS MERN Stack Certification**

