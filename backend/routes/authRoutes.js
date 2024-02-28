const express = require('express')
const router = express.Router()
const cors = require('cors')
const { test, registerUser, loginUser, logoutUser, getProfile } = require('../controllers/authControllers')


//middleware
router.use(
  cors({
    credentials: true,
    origin: [ "https://floor-planer.netlify.app/" ]
  }) 
)


router.get("/", test)
router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout", logoutUser)
router.get("/profile", getProfile)

module.exports = router