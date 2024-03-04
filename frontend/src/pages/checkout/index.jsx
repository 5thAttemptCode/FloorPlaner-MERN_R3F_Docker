import React, { useContext } from 'react'
import './style.css'
import H3 from '../../components/subHeaderH3'
import H4 from '../../components/subHeaderH4'
import LinkButton from '../../components/linkButton'
import { CartContext } from '../../context/cartContext'
import { OrderContext } from '../../context/orderContext'
import { Bank, ContactlessPayment, CreditCard, PaypalLogo, Trash, Truck } from '@phosphor-icons/react'
import { format } from 'date-fns'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/userContext'
import toast from 'react-hot-toast'


export default function Checkout() {
 
  //Context 
  const { cart, 
          totalPrice, 
          removeFromCart, 
          increaseQuantity, 
          decreaseQuantity, 
          updateQuantity,
          clearCart 
        } = useContext(CartContext)

        
  //Date of delivery
  let deliveryDate = new Date()
  
  deliveryDate.setDate(deliveryDate.getDate() + 2)
  const formattedDeliveryDateOne = format(deliveryDate, 'dd.MM.yyyy')

  deliveryDate.setDate(deliveryDate.getDate() + 1)
  const formattedDeliveryDateTwo = format(deliveryDate, 'dd.MM.yyyy')

  
  //Order Context
  const { user } = useContext(UserContext)
  const { setOrder } = useContext(OrderContext)
  const navigate = useNavigate()

  const handleCheckout = () => {
    if(!user){
      toast.error("Please login first")
      //Wrap the navigate function in a setTimeout 
      //to ensure it runs cleanly
      setTimeout(() => {
        navigate('/login')
      }, 0)
      return
    }

    setOrder({ 
        items: cart, 
        total: totalPrice, 
        date: new Date()
    })
    clearCart()
    toast.success("Thank you for your order")
}


  return (
    <section className='checkout'>
      <div className='checkout-container'>
        <div className="checkout-item-container one">
        <h1>
          {cart.length <= 0 ? 
            <div>Your Cart is empty! Check our floor materials <Link to="/floor-materials">HERE</Link>, or configurate your room in 3D <Link to="/configurator">HERE!</Link></div>
            : 
            "Order Summary:"
          }
        </h1>

        {cart.map((item, index) => (
          <div className='checkout-item-container-container' key={index}>
            <div className="checkout-item info">
              <img src={item.image} alt="" />
              <div>
                <H3 text={item.name} />
                <p>price per m² ${item.price}</p>
              </div>
            </div>
            <div className="checkout-item price">
              <div className='input'>
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
              <Trash onClick={() => removeFromCart(item)} className='trash' size={23} />
            </div>
          </div>
        ))}
        </div>
        
        {cart.length > 0 && (
          <div className='checkout-item-container delivery'>
            <H3 text='Expected delivery' />
            <p>
              <Truck className='icon' size={22} /> {formattedDeliveryDateOne} - {formattedDeliveryDateTwo}
            </p>
          </div>
        )}

        {cart.length > 0 && (
          <div className="checkout-item-container">
            <H3 text="We accept" />
            <span><PaypalLogo size={22} /> <CreditCard size={22} /> <ContactlessPayment size={22} /> <Bank size={22} /></span>
          </div>
        )}

        {cart.length > 0 && (
          <div className="checkout-item-container checkout-total">
            <div className="cost-listing">
              <H4 text="Subtotal:" />
              <H4 text={`$${(totalPrice() - ((totalPrice() / 100) * 19)).toFixed(2)}`} />
            </div>
            <div className="cost-listing">
              <H4 text="Tax 19%:"/>
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
        )}

        {cart.length > 0 && (
          <LinkButton onClick={handleCheckout} background="--accentColor" color="--white">Pay and Buy</LinkButton>
        )}
        
      </div>

    </section>
  )
}
