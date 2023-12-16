import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'

import Work from './pages/Work'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import About from './pages/About'

//work
import Research from './pages/work/Research'
import Photography from './pages/work/Photography'

//projects
import Portraits from './pages/projects/Portraits'
import Toolkit from './pages/projects/Toolkit'
import Webapps from './pages/projects/Webapps'
import Dataviz from './pages/projects/Dataviz'

//blog
import UnpackingClusters from './pages/blog/UnpackingClusters'
import Making100portraits from './pages/blog/Making100portraits'
import MakingPortfolio from './pages/blog/MakingPortfolio'
import WhyCSSci from './pages/blog/WhyCSSci'
import APIhijack from './pages/blog/APIhijack'

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
      <Route path="/projects/webapps" element={<Webapps />} />
      <Route path="/projects/dataviz" element={<Dataviz />} />


      <Route path="/blog/making-of-100portraits" element={<Making100portraits />} />
      <Route path="/blog/making-of-portfolio" element={<MakingPortfolio />} />
      <Route path="/blog/unpacking-clusters" element={<UnpackingClusters />} />
      <Route path="/blog/why-computational-social-science" element={<WhyCSSci />} />
      <Route path="/blog/api-hijacking" element={<APIhijack />} />  


    </Routes>
  )
}

export default App
