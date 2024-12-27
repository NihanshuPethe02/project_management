import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">Project Manager</Link>
          <Link 
            to="/add" 
            className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition-colors"
          >
            Add Project
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar