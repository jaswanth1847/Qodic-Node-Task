
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./route/authRouter');
const todoRoutes = require('./route/todoRoutes');
const app = express();


// Middleware
app.use(express.json());

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/tododbs")
    .then(() => {
         console.log("MongoDB connection established");
     })
     .catch((err) => {
         console.error("Error connecting to MongoDB:", err.message);
     });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

// Start server
app.listen(5001, () => {
    console.log("Server is running on http://localhost/5001");
})
