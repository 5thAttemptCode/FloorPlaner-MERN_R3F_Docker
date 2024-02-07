//Controllers are the function associated with the endpoints
const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken')


const test = (req, res) => {
    res.json("Test is defined")
}


//Register endpoint
const registerUser = async (req, res) => {
  try{
    const { email, password } = req.body // Destructure first

    //Check password meat requirements
    if(!password || password.length < 6){
      return res.json({
        error: "Password with min 6 characters required"
      })
    }

    // Check if email was entered
    const exist = await User.findOne({ email })
    if(exist){
      return res.json({
        error: "Email is already signed up"
      })
    }

    const hashedPassword = await hashPassword(password)

    // Create user in DB
    const user = await User.create({
      email, 
      password : hashedPassword
    })

    return res.json(user)

  } catch(error){
    console.log(error)
  }
}


//Login endpoint
const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body

    //Check if user exist
    const user = await User.findOne({email})
    if(!user){
      return res.json({
        error: "No user found"
      })
    }

    //Check if password match
    const match = await comparePassword(password, user.password)
    if(match){
        jwt.sign({email: user.email, id: user._id}, process.env.VITE_JWT_SECRET, {}, (err, token) => {
            if(err) throw err
            res.cookie("token", token).json(user)
        })
    }
    if(!match){
        res.json({
            error: "Passwords don't match"
        })
    }
  } catch(error){
    console.log(error)
  }
}


// Logout endpoint
const logoutUser = (req, res) => {
  res.clearCookie('token');
  return res.json({ message: 'Logged out successfully' });
}


// Get profile
const getProfile = (req, res) => {
  const { token } = req.cookies

  // Check if token exists in the request cookies
  if (token) {
    jwt.verify(token, process.env.VITE_JWT_SECRET, {}, (err, user) => {
    if (err) throw err
    return res.json(user)
    })
  } else {
    res.json(null)
  }
}


module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser
}