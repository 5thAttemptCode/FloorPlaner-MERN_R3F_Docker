import React, { useContext, useState } from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { List, ShoppingCart, UserCircle } from '@phosphor-icons/react'
import LinkButton from '../linkButton'
import H3 from '../subHeaderH3'
import { CartContext } from '../../context/cartContext'
import { UserContext } from '../../context/userContext'


export default function Nav() {

  const { cart } = useContext(CartContext)
  const { user } = useContext(UserContext)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const userPath = user ? "/profile" : "/login"

  //Menu
  const [menuVisible, setMenuVisible] = useState(false)

  const handleLinkClick = () => {
    setMenuVisible(null)
  }

  return (
    <>
      <nav>
        <div>
          <LinkButton to="/">FLOOR <span>PLANER</span></LinkButton>
          <LinkButton to="/floor-materials">MATERIALS</LinkButton>
          <LinkButton to="/configurator" background="--accentColor" color="--lightColor">3D CONFIGURATOR</LinkButton>
        </div>
          <Link className="logo" to="/">F<span>P</span></Link>
        <div>
          <Link to={userPath} className='icon-button'>
            <UserCircle size={35} />
          </Link>
          <Link to="/checkout" className='icon-button shopping-cart'>
            <ShoppingCart size={28} />
            {itemCount > 0 && <span className='cart-counter'>{itemCount}</span>}
          </Link>
          <button onClick={() => setMenuVisible(!menuVisible)} className='menu-button'>
            <List className='icon' size={32} />
          </button>
        </div>
      </nav>

      <div style={{ transform: menuVisible? 'translateX(-50%)' : 'translateX(200%)'}} className="responsive-menu">
        <div className='responsive-menu-container'>
          <LinkButton to="/" onClick={handleLinkClick}>FLOOR PLANER</LinkButton>
          <LinkButton to="/floor-materials" onClick={handleLinkClick}>MATERIALS</LinkButton>
          <LinkButton to="/configurator" onClick={handleLinkClick} background="--accentColor" color="--lightColor">3D CONFIGURATOR</LinkButton>
        </div>
      </div>
    </>
  )
}

