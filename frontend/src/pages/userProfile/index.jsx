import React, { useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../../context/userContext'


export default function UserProfile() {

  const { user, setUser } = useContext(UserContext)

  const logout = async () => {
      try {
          await axios.post('/logout');
          setUser(null);
      } catch (error) {
          console.error('Error during logout', error);
      }
  }
  
  return (
    <section>
      <button onClick={logout}>Logout</button>
    </section>
  )
}
