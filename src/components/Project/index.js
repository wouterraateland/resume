import React from 'react'
import './styles.css'

const Project = ({ title, description, image, link }) => (
  <a
    className={`Project${image ? `` : ` no-image`}`}
    href={link}
    target="_blank"
    style={{ backgroundImage: `url(${image})` }}>
    <div className="Project-meta">
      {title
        ? <h4 className="Project-title">{title}</h4>
        : '' }
      {description
        ? <p className="Project-description">{description}</p>
        : '' }
    </div>
  </a>
)

export default Project
