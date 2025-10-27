import React from 'react'
import Navbar from './components/pages/headers/Navbar'
import './App.css'
import Home from './components/pages/main/Home/Home'

const App = () => {
  return (
    <div className='bg-[var(--ternary)] min-h-screen'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App