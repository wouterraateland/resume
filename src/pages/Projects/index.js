import React from 'react'
import './styles.css'

import Entry from 'components/Entry'
import Project from 'components/Project'

import pilsmeister from 'media/pilsmeister.png'
import driebroek from 'media/driebroek.svg'
import parkourdelft from 'media/parkourdelft.svg'

const Projects = () => (
  <div className="Projects">
    <div className="wrapper">
      <div className="row">
        <div className="col-12">
          <h2>Selected Personal Projects</h2>
        </div>
      </div>
      <Entry
        image={driebroek}
        org="Driebroek" start="2017" end="now"
        title="Clothing brand for Aladdin pants" />
      <Entry
        image={parkourdelft}
        org="Parkour Delft" start="2016"
        title="Organiser and trainer" />
      <Entry
        image={pilsmeister}
        org="Pilsmeister" start="2015" end="2016"
        title="Web and mobile app" />
    </div>
  </div>
)

export default Projects
