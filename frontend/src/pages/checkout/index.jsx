import React, { useContext } from 'react'
import './style.css'
import H3 from '../../components/subHeaderH3'
import LinkButton from '../../components/linkButton'
import { CartContext } from '../../context/cartContext'
import { UserContext } from '../../context/userContext'
import { Trash } from '@phosphor-icons/react'



export default function Checkout() {
 
  const { user } = useContext(UserContext)
  const { cart, totalPrice } = useContext(CartContext)

  return (
    <section className='checkout'>
      <h1>CHECKOUT</h1>
      {!!user && (<H3 text={user.email} />)}
      <div className='checkout-container'>
        {cart.map((item, index) => (
          <div className='checkout-item' key={index}>
            <H3 text={item.name} />
            <p>{item.quantity} x ${item.price} = ${item.quantity * item.price}</p>
            <Trash size={32} /> 
          </div>
        ))}
        <div className="checkout-total">
          <H3 text={`Total: $${totalPrice()}`} />
        </div>
      </div>
      <LinkButton background="--accentColor" color="--lightColor">Pay and Buy</LinkButton>
    </section>
  )
}
