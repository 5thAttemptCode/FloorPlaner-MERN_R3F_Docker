import React, { useState } from 'react'

export default function Register() {

  const [ data, setData ] = useState({
    email: "",
    password: ""
  })

  const registerUser = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type="email" placeholder='Your e-mail' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value})} />
        <label>Password</label>
        <input type="password" placeholder='Your password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value})} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
