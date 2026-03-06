# 🎬 Vidly

A video rental REST API built with **Node.js**, **Express**, and **MongoDB**.  
Built by following Mosh Hamedani's Node.js course.

---

## 🚀 Features

- CRUD operations for **Genres**, **Movies**, **Customers**, and **Rentals**
- Input validation with **Joi**
- MongoDB integration with **Mongoose**
- Middleware for logging
- Clean RESTful route structure

---

## 🛠️ Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Runtime    | Node.js                 |
| Framework  | Express.js              |
| Database   | MongoDB + Mongoose      |
| Validation | Joi                     |

---

## 📁 Project Structure

```
vidly/
├── models/
│   ├── customer.js
│   ├── genre.js
│   ├── movie.js
│   └── rental.js
├── routes/
│   ├── customers.js
│   ├── genres.js
│   ├── home.js
│   ├── movies.js
│   └── rentals.js
├── middleware/
│   └── logger.js
├── app.js
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

```bash
# Clone the repo
git clone https://github.com/Nanopixel7/vidly.git

# Navigate into the folder
cd vidly

# Install dependencies
npm install

# Start the server
node app.js
```

The API will run on `http://localhost:3000`

---

## 📡 API Endpoints

| Method | Endpoint          | Description          |
|--------|-------------------|----------------------|
| GET    | /api/genres       | Get all genres       |
| POST   | /api/genres       | Create a genre       |
| GET    | /api/movies       | Get all movies       |
| POST   | /api/movies       | Create a movie       |
| GET    | /api/customers    | Get all customers    |
| POST   | /api/customers    | Create a customer    |
| GET    | /api/rentals      | Get all rentals      |
| POST   | /api/rentals      | Create a rental      |

---

## 📚 Course

This project is part of [Mosh Hamedani's Node.js course](https://codewithmosh.com).

---

## 👤 Author

**Annaguly** — [@Nanopixel7](https://github.com/Nanopixel7)