import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import H3 from '../../components/subHeaderH3'


export default function Login() {

    const navigate = useNavigate()

    const [ data, setData ] = useState({
      email: "",
      password: ""
    })

  const loginUser = async (e) => {
    e.preventDefault()
      const { email, password } = data
      try{ 
        const { data } = await axios.post("/login", {
          email,
          password
        })
        if(data.error){
          toast.error(data.error)
        } else{
          setData({})
          toast.success("Login successfull")
          navigate("/checkout")
        }
      } catch(error){
    }
  }
    
  return (
    <section className='user-form'>
      <form onSubmit={loginUser}>
        <H3 text="Login" />
        <label>Email</label>
        <input type="email" placeholder='Your e-mail' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value})} />
        <label>Password</label>
        <input type="password" placeholder='Your password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value})} />
        <button type='submit'>Login</button>
        <p>Don't have an account yet? <Link to="/register">Sign Up</Link> here</p>
      </form>
    </section>
  )
}
