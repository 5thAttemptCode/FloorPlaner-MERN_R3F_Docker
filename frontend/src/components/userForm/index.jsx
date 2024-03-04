import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import H3 from '../subHeaderH3'


export default function UserForm({
    title,
    linkText,
    linkTo,
    buttonText,
    onFormSubmit,
    onDataChange,
    data,
    checkboxVisible = false,
    checkboxChecked = false,
    onCheckboxChange = () => {}
}) {

  return (
    <section className='user-form'>
      <form onSubmit={onFormSubmit}>
        <H3 text={title} />
        <label>Email</label>
        <input 
          type="email" 
          placeholder='Your e-mail' 
          value={data.email} 
          onChange={(e) => onDataChange({ ...data, email: e.target.value})} 
        />
        <label>Password</label>
        <input 
          type="password" 
          placeholder='Your password' 
          value={data.password} 
          onChange={(e) => onDataChange({ ...data, password: e.target.value})} 
        />
          {checkboxVisible && (
            <label>
              <input type="checkbox" checked={checkboxChecked} onChange={onCheckboxChange} /> 
              <span>Demo account</span>
            </label>
          )}
          <button type='submit'>{buttonText}</button>
          <p>{linkText} <Link to={linkTo}>HERE</Link></p>
        </form>
    </section>
  )
}