import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Work from './pages/Work'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/work" element={<Work />} />
    </Routes>
  )
}

export default App
