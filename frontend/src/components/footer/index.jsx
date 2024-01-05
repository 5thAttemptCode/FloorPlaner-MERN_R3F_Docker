import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h3>Floor Planer</h3>
        <ul>
          <li><a href="/#" target="_blank">About Us</a></li>
          <li><a href="/#" target="_blank">Career</a></li>
          <li><a href="/#" target="_blank">Partners</a></li>
          <li><a href="/#" target="_blank">Contact Us</a></li>
        </ul>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
      <div className="footer-container"></div>
    </footer>
  )
}
