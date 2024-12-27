import React, { createContext, useContext, useState } from 'react'

const ProjectContext = createContext()

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([])

  const addProject = (project) => {
    setProjects([...projects, { ...project, id: Date.now().toString() }])
  }

  const updateProject = (id, updatedProject) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...updatedProject, id } : project
    ))
  }

  const deleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id))
  }

  const getProjectById = (id) => {
    return projects.find(project => project.id === id)
  }

  return (
    <ProjectContext.Provider value={{
      projects,
      addProject,
      updateProject,
      deleteProject,
      getProjectById
    }}>
      {children}
    </ProjectContext.Provider>
  )
}

export function useProjects() {
  return useContext(ProjectContext)
}