import React from 'react'
import './styles.css'

import Project from 'components/Project'

import piano from 'media/projects/piano.jpg'
import ski from 'media/projects/ski.jpg'

const Hobbies = () => (
  <div className="Hobbies">
    <div className="wrapper">
      <div className="row">
        <div className="col-12">
          <h2>Hobbies</h2>
        </div>
      </div>
      <div className="row">
        <Project
          title="Piano"
          image={piano} />
        <Project
          title="Skiing"
          image={ski} />
      </div>

      <ul>
        <li>Piano</li>
        <li>Bouldering</li>
        <li>Parkour</li>
        <li>Skiing</li>
        <li>Origami</li>
      </ul>
    </div>
  </div>
)

export default Hobbies
