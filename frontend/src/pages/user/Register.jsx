import React, { useContext, useState } from 'react'
import './style.css'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import H3 from '../../components/subHeaderH3'
import { UserContext } from '../../context/userContext'


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
    <section className='user-form'>
      <form onSubmit={registerUser}>
        <H3 text="Register" />
        <label>Email</label>
        <input type="email" placeholder='Your e-mail' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value})} />
        <label>Password</label>
        <input type="password" placeholder='Your password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value})} />
        <button type='submit'>Submit</button>
        <p>Already have an account? Login <Link to="/login">HERE</Link></p>
      </form>
    </section>
  )
}
