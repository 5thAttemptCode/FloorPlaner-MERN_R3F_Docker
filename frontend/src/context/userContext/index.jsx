import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios' 


export const UserContext = createContext({})

export function UserContextProvider({children}){

  const [ user, setUser ] = useState(null)

  useEffect(() => {
    if (!user) {
      axios.get('/profile', { withCredentials: true })
      .then(({data}) => {
        setUser(data)
      })
      .catch(error => {
        console.error('Error fetching the profile:', error)
      })
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}