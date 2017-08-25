import React from 'react'
import './styles.css'

import Entry from 'components/Entry'
import Project from 'components/Project'

import vs from 'media/vs.png'
import wr from 'media/wr.png'
import ch from 'media/ch.png'
import tud from 'media/tud.png'

import epca from 'media/projects/epca.png'

const Work = () => (
  <div className="Work">
    <div className="wrapper">
      <div className="row">
        <div className="col-12">
          <h2>Work experience</h2>
        </div>
      </div>
      <Entry
        image={vs}
        org="Vlinderstorm" start={2015} end="now"
        location="Amsterdam, Netherlands"
        title="Full stack web developer">
        <Project
          title="EPCA website"
          image={epca}
          link="http://epca.de" />
        bv
        juiceexpress
        squareevents
      </Entry>
      <Entry
        image={wr}
        org="Wouter Raateland Webdesign" start="2014" end="now"
        location="Delft, Netherlands"
        title="Freelance web developer">
        ORAS
        ReportFlip
        Punch
      </Entry>
      <Entry
        image={ch}
        org="W.I.S.V. 'Christiaan Huygens'" start="2016" end="2017"
        location="Delft, Netherlands"
        title="Chairman of HackDelft">


      </Entry>
      <Entry
        image={tud}
        org="Delft University of Technology" start="2015" end="2017"
        location="Delft, Netherlands"
        title="Teaching assistant">
        <Project title="TW1090 - Inleiding Programmeren" />
        <Project title="4051CALC1Y - Calculus 1" />
        <Project title="TI1206 - Object-oriented programming" />
        <Project title="TI1506 - Web and Database Technology" />
      </Entry>
    </div>
  </div>
)

export default Work
