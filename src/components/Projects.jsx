import { useRef, useState } from 'react'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { projects } from '../data/portfolio'
import ImageWithFallback from './ImageWithFallback'
import Modal from './Modal'
import ProjectDetail from './ProjectDetail'
import '../styles/projects.css'

function Projects() {
  const sectionRef = useRef(null)
  const [selected, setSelected] = useState(null)
  useScrollRevealAll(sectionRef)

  const handleKeyDown = (e, project) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setSelected(project)
    }
  }

  return (
    <section id="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-label reveal">Selected Works</div>
        <h2 className="section-title reveal reveal-delay-1">
          Selected <span className="it">Works.</span>
        </h2>
        <p className="section-subtitle reveal reveal-delay-1">
          Digital experiences shaped by curiosity, logic, and creativity.
        </p>

        <div className="projects-table">
          {projects.map((project, index) => (
            <div
              key={project.title}
              role="button"
              tabIndex={0}
              className={`project-row reveal${index > 0 ? ` reveal-delay-${index}` : ''}`}
              onClick={() => setSelected(project)}
              onKeyDown={(e) => handleKeyDown(e, project)}
            >
              <div className="project-thumbnail">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  fallback={
                    <div
                      className="project-thumb-inner"
                      style={{ background: project.gradient }}
                    >
                      {project.icon}
                    </div>
                  }
                />
              </div>
              <div>
                <span className="project-category">{project.category}</span>
                <div className="project-title">{project.title}</div>
                <div className="project-desc">{project.desc}</div>
              </div>
              <div className="project-meta">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {project.year && <div className="project-year">{project.year}</div>}
              </div>
              <span className="project-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        labelledById="project-detail-title"
      >
        {selected && <ProjectDetail project={selected} />}
      </Modal>
    </section>
  )
}

export default Projects
