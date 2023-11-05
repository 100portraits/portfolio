import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'

import Work from './pages/Work'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import About from './pages/about'

//work
import Research from './pages/work/Research'
import Photography from './pages/work/Photography'

//projects
import Portraits from './pages/projects/Portraits'
import Toolkit from './pages/projects/Toolkit'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/work" element={<Work />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />

      
      <Route path="/work/research" element={<Research />} />
      <Route path="/work/photography" element={<Photography />} />

      <Route path="/projects/portraits" element={<Portraits />} />
      <Route path="/projects/toolkit" element={<Toolkit />} />

    </Routes>
  )
}

export default App
