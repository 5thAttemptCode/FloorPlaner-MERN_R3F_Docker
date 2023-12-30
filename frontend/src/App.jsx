import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Nav from './components/nav'
import Home from './pages/home'
import Configurator from './pages/configurator'
import Footer from './components/footer'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/configurator" element={<Configurator />} />
      </Routes>
    </BrowserRouter>
  )
}
