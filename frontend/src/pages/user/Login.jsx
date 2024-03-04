import React, { useContext, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/userContext'
import UserForm from '../../components/userForm'


export default function Login() {

  const navigate = useNavigate()

  const [ data, setData ] = useState({
    email: "",
    password: ""
  })

  const [ isChecked, setChecked ] = useState(false)
  const { setUser } = useContext(UserContext)

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
          setUser(data)
          setData({})
          toast.success("Login successfull")
          navigate("/profile")
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
    <UserForm
      title="Login to your account"
      linkText="Don't have an account yet? Sign up"
      linkTo="/register"
      buttonText="Login"
      onFormSubmit={loginUser}
      onDataChange={setData}
      data={data}
      checkboxVisible={true}
      checkboxChecked={isChecked}
      onCheckboxChange={handleCheckboxChange}
    />
  )
}
