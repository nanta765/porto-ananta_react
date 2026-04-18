import { useRef } from 'react'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { projects } from '../data/portfolio'
import '../styles/projects.css'

function Projects() {
  const sectionRef = useRef(null)
  useScrollRevealAll(sectionRef)

  return (
    <section id="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-label reveal">Proyek Pilihan</div>
        <h2 className="section-title reveal reveal-delay-1">
          Karya teknis<br />dengan <span className="it">presisi.</span>
        </h2>

        <div className="projects-table">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              className={`project-row reveal${index > 0 ? ` reveal-delay-${index}` : ''}`}
            >
              <div className="project-thumbnail">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div
                    className="project-thumb-inner"
                    style={{ background: project.gradient }}
                  >
                    {project.icon}
                  </div>
                )}
              </div>
              <div>
                <div className="project-title">{project.title}</div>
                <div className="project-desc">{project.desc}</div>
              </div>
              <div className="project-meta">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-year">{project.year}</div>
              </div>
              <span className="project-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
