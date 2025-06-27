# VideoChat

A full-stack video conferencing web application with user authentication, real-time video & audio communication, and chat features. Built with Node.js, Express, MongoDB for the backend, and React for the frontend, leveraging Socket.IO and WebRTC for real-time communication.

---

## ✨ Features

* 🔒 **User Authentication** (register & login)
* 🎥 **Real-time Video and Audio Calling** (WebRTC + Socket.IO)
* 💬 **Instant Messaging / Chat**
* 🗂 **User Management & Meeting Records** (MongoDB)
* 🎨 Responsive UI built with React

---

## 🚀 Tech Stack

| Layer     | Technology              |
| --------- | ----------------------- |
| Frontend  | React, Context API, CSS |
| Backend   | Node.js, Express        |
| Real-time | Socket.IO, WebRTC       |
| Database  | MongoDB (Mongoose)      |
| Auth      | JWT, bcrypt             |

---

## 📂 Project Structure

```
VideoChat/
 ├── Backend/
 │    ├── src/
 │    │    ├── app.js
 │    │    ├── controllers/
 │    │    ├── models/
 │    │    └── routes/
 │    └── package.json
 └── frontend/
      ├── src/
      ├── public/
      └── package.json
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/chiraggoyal-12/VideoChat.git
cd VideoChat
```

### 2️⃣ Install backend dependencies

```bash
cd Backend
npm install
```

### 3️⃣ Install frontend dependencies

```bash
cd ../frontend
npm install
```

---

## 🚀 Running the project locally

### Start backend server

```bash
cd Backend
npm run dev
```

> Runs on `http://localhost:8000` (or your configured port)

### Start frontend app

```bash
cd ../frontend
npm start
```

> Runs on `http://localhost:3000`

---

## 📝 Environment Variables

Make sure you create `.env` files in your `Backend` directory for environment-specific settings. For example:

```
PORT=8000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/yourdb
```

---

## 🙌 Author

**Chirag Goyal**
[GitHub Profile](https://github.com/chiraggoyal-12)

---

## 🙌 Acknowledgements

* [Socket.IO](https://socket.io/)
* [WebRTC](https://webrtc.org/)
* [Mongoose](https://mongoosejs.com/)
* [React](https://react.dev/)

---

> ⚠️ This project is for educational/demo purposes only.
