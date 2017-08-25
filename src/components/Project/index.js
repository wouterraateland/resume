import React from 'react'
import './styles.css'

const Project = ({ title, image, link }) => (
  <a
    className="Project"
    href={link}
    target="_blank"
    style={{ backgroundImage: `url(${image})` }}>
    <h4 className="Project-title">{title}</h4>
  </a>
)

export default Project
