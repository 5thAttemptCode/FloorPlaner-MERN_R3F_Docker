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

  const [ isChecked, setChecked ] = useState(false)

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

  const handleCheckboxChange = e => {
    setChecked(e.target.checked)
    if (e.target.checked) {
      setData({ email: "mailhenry@mail.com", password: "mailHenry" })
    } else {
      setData({ email: "", password: "" })
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
        <label>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /> <span>Demo account</span>
        </label>
        <button type='submit'>Login</button>
        <p>Don't have an account yet? Sign up <Link to="/register">HERE</Link></p>
      </form>
    </section>
  )
}
