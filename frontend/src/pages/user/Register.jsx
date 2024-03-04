import React, { useContext, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/userContext'
import UserForm from '../../components/userForm'


export default function Register() {

  const { setUser } = useContext(UserContext)
  const [ data, setData ] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const registerUser = async (e) => {
    e.preventDefault()
    const { email, password } = data
    try{
      const { data } = await axios.post("/register", {
        email, password
      })
      if(data.error){
        toast.error(data.error)
      } else {
        setUser(data)
        setData({})
        toast.success("Register successfull")
        navigate("/")
      }
    } catch(error){
      console.log(error)
    }
  }

  return (
    <UserForm
      title="Sign-up for a new account"
      linkText="Already have an account? Login"
      linkTo="/login"
      buttonText="Submit"
      onFormSubmit={registerUser}
      onDataChange={setData}
      data={data}
    />
  )
}
