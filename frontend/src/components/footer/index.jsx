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
          <li><a href="#">About Us</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">Legal</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <div>
          <LinkButton background="--accentColor" color="--white" to="/login">Login</LinkButton>
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
