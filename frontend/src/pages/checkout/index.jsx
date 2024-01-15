import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { useSnapshot } from 'valtio'
import { state } from '../../componentsCanvas/floorMaterial'


export default function Checkout() {

  const { user } = useContext(UserContext);
  const snap = useSnapshot(state);

  return (
    <section className='checkout'>
      <h1>CHECKOUT</h1>
      {!!user && (<h5>Hello {user.email}</h5>)}
      <ul>
        {snap.cart.items.map(item => (
          <li key={item.id}>
            {item.name + " - " + item.price}
          </li>
        ))}
      </ul>
    </section>
  )
}