const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express()

// Define specific CORS options
const corsOptions = {
  origin: 'https://floor-planer.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true, 
}
  
app.use(cors(corsOptions))

//connect to DB
mongoose.connect(process.env.VITE_MONGO_URL)
.then(() => console.log("DATABASE CONNECTED"))
.catch((err) => console.log("ERROR CONNECTION DB", err))

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

app.use("/", require('./routes/authRoutes'))

const port = process.env.VITE_PORT
app.listen(port, () => console.log(`Server is running on port ${port}`))