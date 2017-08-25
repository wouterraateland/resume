import React from 'react'
import './styles.css'

import Entry from 'components/Entry'
import Project from 'components/Project'

import piano from 'media/projects/piano.jpg'
import ski from 'media/projects/ski.jpg'
import origami from 'media/projects/origami.jpg'
import bouldering from 'media/projects/bouldering.jpg'
import parkour from 'media/projects/parkour.jpg'

const Hobbies = () => (
  <div className="Hobbies">
    <div className="wrapper">
      <div className="row">
        <div className="col-12">
          <h2>My Hobbies</h2>
        </div>
      </div>
      <Entry>
        <Project
          title="Bouldering"
          image={bouldering} />
        <Project
          title="Origami"
          image={origami} />
        <Project
          title="Freerunning"
          image={parkour} />
        <Project
          title="Piano"
          image={piano} />
        <Project
          title="Skiing"
          image={ski} />
      </Entry>
    </div>
  </div>
)

export default Hobbies
