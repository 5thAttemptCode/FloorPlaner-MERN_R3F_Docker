import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/cartContext'
import { FloorMaterialProvider } from './context/floorButtonContext'
import { OrderProvider } from './context/orderContext'
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
import ScrollToTop  from './utils/scrollToTop'
import UserProfile from './pages/userProfile'


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
axios.defaults.withCredentials = true


export default function App() {
  return (
    <UserContextProvider>
      <FloorMaterialProvider>
        <CartProvider>
          <OrderProvider>
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
                <Route path="/profile" element={<ProfileRoute />} />
                <Route path="/login" element={<LoginRoute />} />    
              </Routes>
              <Footer />
            </BrowserRouter>
          </OrderProvider>
        </CartProvider>
      </FloorMaterialProvider>
    </UserContextProvider>
  )
}

const ProfileRoute = () => {
  const { user } = useContext(UserContext)
  return user ? <UserProfile /> : <Navigate to="/login" />
}

const LoginRoute = () => {
  const { user } = useContext(UserContext)
  return user ? <Navigate to="/profile" /> : <Login />
}