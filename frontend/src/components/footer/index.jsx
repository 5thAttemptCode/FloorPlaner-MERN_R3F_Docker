import React from 'react'
import './style.css'
import H3 from '../../components/subHeaderH3'
import LinkButton from '../linkButton'


export default function Footer() {
  return (
    <footer>

      <div className="footer-container">
        <H3 text="Floor Planer" />
        <ul>
          <li><a href="/#" target="_blank">About Us</a></li>
          <li><a href="/#" target="_blank">Career</a></li>
          <li><a href="/#" target="_blank">Partners</a></li>
          <li><a href="/#" target="_blank">Contact Us</a></li>
        </ul>
        <div>
          <LinkButton background="--accentColor" color="--lightColor" to="/login">Login</LinkButton>
          <LinkButton to="/register">Register</LinkButton>
        </div>
      </div>

      <div className="footer-container">
        <ul>
          <li href="#">Facebook</li>
          <li href="#">Twitter</li>
          <li href="#">Instagram</li>
        </ul>
        <H3 text="&#169; Floor Planer" />
      </div>
      
    </footer>
  )
}
