import React from 'react'
import './styles.css'

const Introduction = ({ name, link }) => (
  <div className="Introduction">
    <div className="wrapper">
      <div className="row">
        <div className="col-12">
          <h1>{name} - Resume</h1>
          <a href={link}>View the project on GitHub</a>
        </div>
      </div>
    </div>
  </div>
)

export default Introduction
