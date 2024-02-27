import React, { useContext } from 'react'
import './style.css'
import axios from 'axios'
import { UserContext } from '../../context/userContext'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { OrderContext } from '../../context/orderContext'


export default function UserProfile() {

  //User login/-out
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

  //Previous Order
  const { order } = useContext(OrderContext)
  
  return (
    <section className='user-profile'>
      {!!user && (<h3>Hello {user.email}</h3>)}
      <button onClick={logout}>Logout</button>
      <p>Your Last Order:</p>
      {order ? 
        <div className='prev-order'>
          <ul>
            {order.items.map(item => (
              <li key={item.name}>
              {item.quantity}x {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p>Total: ${order.total()}</p>
          <p>Placed on: {order.date.toLocaleString()}</p>
        </div>
      : 
      <h3>Ohh you haven't placed an order before?  <br /> Do it <Link to="/">HERE</Link></h3>
      }
    </section>
  )
}
