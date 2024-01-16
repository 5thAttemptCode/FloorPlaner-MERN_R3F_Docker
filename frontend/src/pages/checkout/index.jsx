import React, { useContext } from 'react'
import H3 from '../../components/subHeaderH3'
import { CartContext } from '../../context/cartContext'
import { UserContext } from '../../context/userContext'


export default function Checkout() {
 
  const { user } = useContext(UserContext)
  const { cart } = useContext(CartContext)

  return (
    <section className='checkout'>
      <h1>CHECKOUT</h1>
      {!!user && (<H3 text={user.email} />)}
      <div>
        {cart.map((item, index) => (
          <div key={index}>
            <H3 text={item.name} />
            <p>{item.quantity} x ${item.price} = ${item.quantity * item.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
