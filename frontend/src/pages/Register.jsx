import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


export default function Register() {

  const [ data, setData ] = useState({
    email: "",
    password: ""
  })

  const registerUser = async (e) => {
    
    const navigate = useNavigate()

    e.preventDefault()
    const { email, password } = data

    try{
      const { data } = await axios.post("/register", {
        email, password
      })
      if(data.error){
        toast.error(data.error)
      } else {
        setData({})
        toast.success("Login successfull")
        navigate("/login")//direct them later to shopping-cart or whatever
      }
    } catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type="email" placeholder='Your e-mail' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value})} />
        <label>Password</label>
        <input type="password" placeholder='Your password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value})} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
