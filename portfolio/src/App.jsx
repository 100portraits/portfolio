import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'

import Work from './pages/Work'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import About from './pages/About'

//work
import ResearchIMDb from './pages/work/ResearchIMDb'
import ResearchEducationalTrends from './pages/work/ResearchEducationalTrends'
import Photography from './pages/work/Photography'
import Partnerships from './pages/work/Partnerships'

//projects
import Portraits from './pages/projects/Portraits'
import Toolkit from './pages/projects/Toolkit'
import Webapps from './pages/projects/Webapps'
import Dataviz from './pages/projects/Dataviz'
import BKhost from './pages/projects/BK-host'
import TECmapper from './pages/projects/TEC-mapper'

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

      
      <Route path="/work/photography" element={<Photography />} />
      <Route path="/work/researchIMDb" element={<ResearchIMDb />} />
      <Route path="/work/researchEdu" element={<ResearchEducationalTrends />} />
      <Route path="/work/partnerships" element={<Partnerships />} />


      <Route path="/projects/portraits" element={<Portraits />} />
      <Route path="/projects/toolkit" element={<Toolkit />} />
      <Route path="/projects/webapps" element={<Webapps />} />
      <Route path="/projects/dataviz" element={<Dataviz />} />
      <Route path="/projects/bk-host" element={<BKhost />} />
      <Route path="/projects/tec-mapper" element={<TECmapper />} />



      <Route path="/blog/making-of-100portraits" element={<Making100portraits />} />
      <Route path="/blog/making-of-portfolio" element={<MakingPortfolio />} />
      <Route path="/blog/unpacking-clusters" element={<UnpackingClusters />} />
      <Route path="/blog/why-computational-social-science" element={<WhyCSSci />} />
      <Route path="/blog/api-hijacking" element={<APIhijack />} />  


    </Routes>
  )
}

export default App
