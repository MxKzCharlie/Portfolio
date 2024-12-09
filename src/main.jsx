import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Certifications from './components/homePage/Certifications'
import ProjectViewer from './pages/ProjectViewer'
import Contact from './pages/Contact'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path='certifications/' element={<Certifications />}></Route>
      </Route>
      <Route path="project/:project" element={<ProjectViewer />}></Route>
      <Route path="contact/" element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>
)
