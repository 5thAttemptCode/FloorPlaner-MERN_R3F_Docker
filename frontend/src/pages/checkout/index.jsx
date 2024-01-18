import React, { useContext } from 'react'
import './style.css'
import H3 from '../../components/subHeaderH3'
import H4 from '../../components/subHeaderH4'
import LinkButton from '../../components/linkButton'
import { CartContext } from '../../context/cartContext'
import { UserContext } from '../../context/userContext'
import { Trash } from '@phosphor-icons/react'


export default function Checkout() {
 
  const { user } = useContext(UserContext)
  const { cart, 
          totalPrice, 
          removeFromCart, 
          increaseQuantity, 
          decreaseQuantity, 
          updateQuantity 
        } = useContext(CartContext)

  return (
    <section className='checkout'>
      <h1>Order summary</h1>
      {!!user && (<H3 text={user.email} />)}
      <div className='checkout-container'>

        {cart.map((item, index) => (
          <div className='checkout-item-container' key={index}>
            <div className="checkout-item info">
              <img src={item.image} alt="" />
              <div>
                <H3 text={item.name} />
                <p>price per m² ${item.price}</p>
              </div>
            </div>
            <div className="checkout-item price">
              <div>
                <span onClick={() => decreaseQuantity(item)}>-</span>
                <input 
                  type="number" 
                  value={`${item.quantity}`} 
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value)
                    if (!isNaN(newQuantity)) {
                      updateQuantity(item, newQuantity)
                    }
                  }}
                />
                <span onClick={() => increaseQuantity(item)}>+</span>
              </div>
              <H3 text={`$${item.quantity * item.price}`} />
              <Trash onClick={() => removeFromCart(item)} className='trash' size={30} />
            </div>
          </div>
        ))}

        <div className="checkout-total">
          <div className="cost-listing">
            <H4 text="Subtotal:" />
            <H4 text={`$${(totalPrice() - ((totalPrice() / 100) * 19)).toFixed(2)}`} />
          </div>
          <div className="cost-listing">
            <H4 text="Taxes 19%"/>
            <H4 text={`$${((totalPrice() / 100) * 19).toFixed(2)}`} />
          </div>
          <div className="cost-listing">
            <H4 text="Shipping:" />
            <H4 text="FREE" />
          </div>
          <hr />
          <div className="cost-listing">
            <H3 text="Total:" />
            <H3 text={`$${totalPrice()}`} />
          </div>
        </div>
      </div>
      <LinkButton background="--accentColor" color="--lightColor">Pay and Buy</LinkButton>
    </section>
  )
}
