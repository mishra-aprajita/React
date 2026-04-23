import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Bollywood from './components/Bollywood'
import Hollywood from './components/Hollywood'
import Technology from './components/Technology'
import Fitness from './components/Fitness'
import Food from './components/Food'
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <Link to="/">Home</Link>
        <Link to="/bollywood">Bollywood</Link>
        <Link to="/hollywood">Hollywood</Link>
        <Link to="/tech">Technology</Link>
        <Link to="/fitness">Fitness</Link>
        <Link to="/food">Food</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/tech" element={<Technology />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/food" element={<Food />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App