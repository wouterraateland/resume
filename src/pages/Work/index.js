import React from 'react'
import './styles.css'

import Entry from 'components/Entry'
import Project from 'components/Project'

import vs from 'media/vs.png'
import wr from 'media/wr.png'
import ch from 'media/ch.png'
import tud from 'media/tud.png'

import epca from 'media/projects/epca.png'
import juice from 'media/projects/juiceexpress.jpg'
import square from 'media/projects/squareevents.jpg'
import oras from 'media/projects/oras.png'
import reportflip from 'media/projects/reportflip.png'
import punch from 'media/projects/punch.png'
import hackdelft from 'media/projects/hackdelft.png'

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
        <Project
          title="BV"
          description="Blockchain system preventing double financing of invoices" />
        <Project
          title="Square Events website"
          image={square}
          link="http://squareevents.nl/" />
        <Project
          title="Juice Express website"
          image={juice} />
      </Entry>
      <Entry
        image={wr}
        org="Wouter Raateland Webdesign" start="2014" end="now"
        location="Delft, Netherlands"
        title="Freelance web developer">
        <Project
          title="ORAS website"
          image={oras}
          link="http://dev.oras.nl/" />
        <Project
          title="ReportFlip landing page"
          image={reportflip}
          link="http://reportflip.com/" />
        <Project
          title="Punch team announcement tool"
          image={punch}
          link="http://www.wouterraateland.nl/projects/punch/" />
      </Entry>
      <Entry
        image={ch}
        org="W.I.S.V. 'Christiaan Huygens'" start="2016" end="2017"
        location="Delft, Netherlands"
        title="Chairman of HackDelft">
        <Project
          title="HackDelft website"
          image={hackdelft}
          link="https://hackdelft.com" />
        <Project
          description="First hackathon at TU Delft. Responsible for team performance and overall organisation." />
      </Entry>
      <Entry
        image={tud}
        org="Delft University of Technology" start="2015" end="2017"
        location="Delft, Netherlands"
        title="Teaching assistant">
        <Project
          title="TW1090"
          description="Inleiding Programmeren" />
        <Project
          title="4051CALC1Y"
          description="Calculus 1" />
        <Project
          title="TI1206"
          description="Object-oriented programming" />
        <Project
          title="TI1506"
          description="Web and Database Technology" />
      </Entry>
    </div>
  </div>
)

export default Work
