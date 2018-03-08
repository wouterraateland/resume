import React from 'react'
import './styles.css'

import Entry from 'components/Entry'

import ch from 'media/ch.png'
import driebroek from 'media/driebroek.svg'
import parkourdelft from 'media/parkourdelft.svg'

const Projects = () => (
  <section className="Projects">
    <h2>Extra-curricular Activities</h2>
    <Entry
      image={ch}
      org="W.I.S.V. 'Christiaan Huygens'" start="2017" end="present"
      location="Delft, Netherlands"
      title="Commissioner Promotion of Symposium Committee"
      description="Responsible for our marketing and partially for the communication with our advisors." />
    <Entry
      image={driebroek}
      org="3broek" start="2017" end="2018"
      location="Delft, Netherlands"
      title="Clothing brand for Aladdin pants"
      description="My latest venture aiming to produce the best fitting Aladdin pants ever. Created an online infrastructure and sold the first few pairs." />
    <Entry
      image={ch}
      org="W.I.S.V. 'Christiaan Huygens'" start="2016" end="2017"
      location="Delft, Netherlands"
      title="Chairman of HackDelft"
      description="First student hackathon held at the TU Delft. I was responsible for team performance, overall organisation and online presence." />
    <Entry
      image={parkourdelft}
      org="Parkour Delft" start="2016"
      title="Organiser and trainer"
      description="Gathered students interested in parkour and trained them in a gym in Delft for half a year." />
  </section>
)

export default Projects
