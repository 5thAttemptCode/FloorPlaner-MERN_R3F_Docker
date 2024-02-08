import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { UserContext, UserContextProvider } from './context/userContext'
import axios from 'axios'
import Checkout from './pages/checkout'
import Configurator from './pages/configurator'
import FloorMaterials from './pages/floorMaterials'
import Footer from './components/footer'
import Home from './pages/home'
import Login from './pages/user/Login'
import Nav from './components/nav'
import Register from './pages/user/Register'
import { CartProvider } from './context/cartContext'
import ScrollToTop  from './utils/scrollToTop'
import { FloorMaterialProvider } from './context/floorButtonContext'
import UserProfile from './pages/userProfile'


axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true

export default function App() {

  const { user } = useContext(UserContext)
  
  return (
    <FloorMaterialProvider>
      <CartProvider>
        <UserContextProvider>
          <BrowserRouter>
            <Nav />
            <ScrollToTop />
            <Toaster position="top-right" toastOption={{duration: 1000}} />
            <Routes>
              <Route path="/" element={<Home />} />          
              <Route path="/register" element={<Register />} />
              <Route path="/configurator" element={<Configurator />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/floor-materials" element={<FloorMaterials />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/profile" /> } />    
              <Route path="/profile" element={user ? <UserProfile /> : <Navigate to="/login" /> } />
            </Routes>
            <Footer />
          </BrowserRouter>
        </UserContextProvider>
      </CartProvider>
    </FloorMaterialProvider>
  )
}