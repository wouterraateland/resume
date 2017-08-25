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
        title="Clothing brand for Aladdin pants"
        description="Driebroek is my newest venture aiming to produce the best fitting Aladdin pants ever. Currently the first few are sold and I am working on an online infrastructure and presence of the company." />
      <Entry
        image={parkourdelft}
        org="Parkour Delft" start="2016"
        title="Organiser and trainer"
        description="For half a year I gave parkour training to students in a gym in Delft. Together with a friend we arranged the hall, invited people over there to train and had fun." />
      <Entry
        image={pilsmeister}
        org="Pilsmeister" start="2015" end="2016"
        title="Webapp for students to tally their beers (currently offline)"
        description="I originally created Pilsmeister for my dorm as an alternative to the tallying of beers on the fridge. The app featured direct updates using sockets, social network logins and group formation methods using QR codes. The app worked, but proved not to be more effective than classic tallying on the fridge." />
    </div>
  </div>
)

export default Projects
