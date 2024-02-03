import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from './context/userContext'
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


axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true


export default function App() {
  return (
    <FloorMaterialProvider>
      <CartProvider>
        <UserContextProvider>
          <BrowserRouter>
            <Nav />
            <ScrollToTop />
            <Toaster position="bottom-right" toastOption={{duration: 2000}} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/configurator" element={<Configurator />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/floor-materials" element={<FloorMaterials />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </UserContextProvider>
      </CartProvider>
    </FloorMaterialProvider>
  )
}

//App, FloorContext, Dashboard, Checkout,