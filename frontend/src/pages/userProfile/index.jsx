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

  //Order ID
  const generateRandom = () => {
    return Math.floor(100000 + Math.random() * 900000)
  }
  
  return (
    <section className='user-profile'>
      <div className='user'>
        {!!user && (<h3>Hello {user.email}</h3>)}
        <button onClick={logout}>Logout</button>
      </div>
      <h3 className='prev-order-title'>Your previous orders:</h3>
      {order ? 
        <div className='prev-order'>
          <div>
            <p>Total: ${order.total()}</p>
            <p>Placed on: {order.date.toLocaleDateString('en-GB')}</p>
            <p>OrderID: {generateRandom()}</p>
          </div>
          <ul>
            {order.items.map(item => (
              <li key={item.name}>
                {item.quantity}x {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      : 
        <h3>Place your first order <Link to="/floor-materials">HERE</Link></h3>
      }
    </section>
  )
}
