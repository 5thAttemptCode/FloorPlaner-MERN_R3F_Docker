import React, { useContext, useState, useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { List, ShoppingCart, UserCircle } from '@phosphor-icons/react'
import LinkButton from '../linkButton'
import { CartContext } from '../../context/cartContext'
import Themeswitch from '../themeSwitch'
import ResponsiveMenu from '../responsiveMenu'


export default function Nav() {

  //Cart
  const { cart } = useContext(CartContext)
  const itemCount = cart.reduce((sum, item) => sum + Number(item.quantity), 0)

  //Responsive-menu
  const [menuVisible, setMenuVisible] = useState(false)

  const handleLinkClick = () => {
    setMenuVisible(false)
  }

  const handleOutsideClick = (event) => {
    if (menuVisible && !event.target.closest('.responsive-menu')) {
      setMenuVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleOutsideClick)

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [menuVisible])

  return (
    <>
      <nav>
        <div>
          <LinkButton to="/">FLOOR <span>PLANER</span></LinkButton>
          <LinkButton to="/floor-materials">MATERIALS</LinkButton>
          <LinkButton to="/configurator" background="--accentColor" color="--white">3D CONFIGURATOR</LinkButton>
        </div>
          <Link className="logo" to="/">F<span>P</span></Link>
        <div>
          <Themeswitch />
          <Link to="/login" className='icon-button'>
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

      <ResponsiveMenu isVisible={menuVisible} handleLinkClick={handleLinkClick} />
    </>
  )
}

