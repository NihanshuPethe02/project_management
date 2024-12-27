import React from 'react'
import { Link } from 'react-router-dom'
import { useProjects } from '../context/ProjectContext'

function ProjectList() {
  const { projects, deleteProject } = useProjects()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <div 
            key={project.id} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <div className="mt-4 text-sm text-gray-500">
              Status: {project.status}
            </div>
            <div className="mt-4 flex space-x-4">
              <Link 
                to={`/project/${project.id}`}
                className="text-indigo-600 hover:text-indigo-800"
              >
                View Details
              </Link>
              <Link 
                to={`/edit/${project.id}`}
                className="text-green-600 hover:text-green-800"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteProject(project.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList