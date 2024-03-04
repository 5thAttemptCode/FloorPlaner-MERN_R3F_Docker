import React from 'react'
import './style.css'
import LinkButton from '../linkButton';


export default function ResponsiveMenu({ isVisible, handleLinkClick }) {
    return (
      <div 
        style={{ transform: isVisible ? 'translateX(-50%)' : 'translateX(200%)'}}
        className="responsive-menu"
      >
        <div className='responsive-menu-container'>
          <LinkButton to="/" onClick={handleLinkClick}>FLOOR PLANER</LinkButton>
          <LinkButton to="/floor-materials" onClick={handleLinkClick}>MATERIALS</LinkButton>
          <LinkButton 
            to="/configurator" 
            onClick={handleLinkClick} 
            background="--accentColor" 
            color="--white"
          >
            3D CONFIGURATOR
          </LinkButton>
        </div>
      </div>
    )
  }
