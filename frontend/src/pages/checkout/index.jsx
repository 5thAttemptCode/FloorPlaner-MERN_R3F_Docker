import React, { useContext } from 'react'
import { UserContext } from '../../context'


export default function Checkout() {

  const { user } = useContext(UserContext)
   
  return (
    <section className='checkout'>
      <h1>CHECKOUT</h1>
      {!!user && (<h5>Hello {user.email}</h5>)}
    </section>
  )
}
