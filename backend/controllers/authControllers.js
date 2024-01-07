//Controllers are the function associated with the endpoints

const User = require("../models/user")
const { hashPassword, comparePassword } = require("../helpers/auth")
const jwt = require("jsonwebtoken")


const test = (req, res) => {
    res.json("test is defined")
}


//Register endpoint
// Register endpoint
const registerUser = async (req, res) => {
    try{
        const { email, password } = req.body // Destructure first

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
        });

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

const getProfile = (req, res) => {
    const { token } = req.cookies
  
    if (token) {
      try {
        jwt.verify(token, process.env.VITE_JWT_SECRET, (err, user) => {
          if (err) {
            res.status(500).json({ error: 'Error verifying token', details: err })
            throw err
          }
          res.json(user)
        })
      } catch(error) {
        console.log("Failed to decode or verify token:", error)
        res.status(500).json({ error: 'Failed to decode or verify token' })
      }
    } else {
      res.status(401).json({ error: 'Not logged in' })
    }
  }


module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}