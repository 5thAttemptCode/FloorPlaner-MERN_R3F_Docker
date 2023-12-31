import React, { useContext } from 'react'
import { UserContext } from '../../context'


export default function Checkout() {

  const { user } = useContext(UserContext)
   
  return (
    <div>
      <h1>CHECKOUT</h1>
      {!!user && (<h2>Hello {user.email}</h2>)}
    </div>
  )
}
