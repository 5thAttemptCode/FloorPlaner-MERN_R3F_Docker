import React, { useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../../context/userContext'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


export default function UserProfile() {

  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const logout = async () => {
    try {
      await axios.post('/logout')
      setUser(null)
      toast.success("Logout successfull")
      navigate("/")
    } catch (error) {
      console.error('Error during logout', error)
    }
  }
  
  return (
    <section>
      <button onClick={logout}>Logout</button>
      {!!user && (<h6>hi {user.email}</h6>)}
    </section>
  )
}
