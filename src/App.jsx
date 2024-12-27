import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProjectList from './components/ProjectList'
import AddProject from './components/AddProject'
import ProjectDetail from './components/ProjectDetail'
import EditProject from './components/EditProject'
import { ProjectProvider } from './context/ProjectContext'

function App() {
  return (
    <ProjectProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<ProjectList />} />
              <Route path="/add" element={<AddProject />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/edit/:id" element={<EditProject />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ProjectProvider>
  )
}

export default App