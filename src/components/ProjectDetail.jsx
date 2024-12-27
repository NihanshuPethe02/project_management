import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useProjects } from '../context/ProjectContext'

function ProjectDetail() {
  const { id } = useParams()
  const { getProjectById } = useProjects()
  const project = getProjectById(id)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.name}</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-medium text-gray-700">Description</h2>
            <p className="mt-1 text-gray-600">{project.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-medium text-gray-700">Status</h2>
              <p className="mt-1 text-gray-600">{project.status}</p>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-700">Timeline</h2>
              <p className="mt-1 text-gray-600">
                {project.startDate} to {project.endDate}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex space-x-4">
          <Link
            to={`/edit/${project.id}`}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Edit Project
          </Link>
          <Link
            to="/"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail