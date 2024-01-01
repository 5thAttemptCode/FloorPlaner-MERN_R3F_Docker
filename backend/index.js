const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")


const app = express()


//connect to DB
mongoose.connect(process.env.VITE_MONGO_URL)
.then(() => console.log("DATABASE CONNECTED"))
.catch((err) => console.log("ERROR CONNECTION DB", err))

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

app.use("/", require("./routes/authRoutes"))

const port = 8000
app.listen(port, () => console.log(`Server is running on port ${port}`))