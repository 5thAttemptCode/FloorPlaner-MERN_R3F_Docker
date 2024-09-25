const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();

// Define specific CORS options
const corsOptions = {
  origin: 'https://floor-planer.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));

// Connect to DB
mongoose.connect(process.env.VITE_MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('DATABASE CONNECTED'))
  .catch((err) => console.log('ERROR CONNECTING TO DB', err));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', require('./routes/authRoutes')); // Authentication routes
app.use('/api/payment', require('./routes/paymentRoutes')); // Payment routes

// Server Port
const port = process.env.VITE_PORT || 5000; // Default to port 5000 if not specified
app.listen(port, () => console.log(`Server is running on port ${port}`));