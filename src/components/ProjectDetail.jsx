import ProjectGallery from './ProjectGallery'

/**
 * Content rendered inside the shared Modal for a selected project.
 */
function ProjectDetail({ project }) {
  // Prefer the multi-image gallery; fall back to the single `image` field.
  const galleryImages =
    project.images && project.images.length > 0
      ? project.images
      : project.image
        ? [project.image]
        : []

  return (
    <div className="project-detail">
      <div className="project-detail-hero">
        <ProjectGallery
          images={galleryImages}
          alt={project.title}
          fallback={
            <div
              className="project-detail-thumb-inner"
              style={{ background: project.gradient }}
            >
              {project.icon}
            </div>
          }
        />
      </div>

      <span className="tag project-detail-type">{project.projectType}</span>

      <h3 id="project-detail-title" className="project-detail-title">
        {project.title}
      </h3>

      <div className="project-detail-meta">
        <span>{project.role}</span>
        <span className="project-detail-dot">·</span>
        <span>{project.category}</span>
      </div>

      <p className="project-detail-desc">{project.desc}</p>

      <div className="project-detail-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {project.keyContributions && project.keyContributions.length > 0 && (
        <>
          <div className="project-detail-subhead">Key Contributions</div>
          <ul className="project-detail-list">
            {project.keyContributions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}

      <a
        href={project.github}
        className="btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub ↗
      </a>
    </div>
  )
}

export default ProjectDetail
