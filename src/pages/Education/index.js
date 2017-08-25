import React from 'react'
import './styles.css'

import Entry from 'components/Entry'

import dgw from 'media/dgw.png'
import ebs from 'media/ebs.png'
import tud from 'media/tud.png'

const Education = () => (
  <div className="Education">
    <div className="wrapper">
      <div className="row">
        <div className="col-12">
          <h2>Education</h2>
          <Entry
            image={tud}
            org="Delft University of Technology" start="2015" end="now"
            location="Delft, Netherlands"
            title="BSc. Computer Science" />
          <Entry
            image={ebs}
            org="European Bartender School" start="2016"
            location="Dublin, Ireland"
            title="Professional level bartender" />
          <Entry
            image={tud}
            org="Delft University of Technology" start="2014" end="2015"
            location="Delft, Netherlands"
            title="BSc. Applied Mathematics, First year (8.3 GPA)" />
          <Entry
            image={dgw}
            org="De Goudse Waarden" start="2008" end="2014"
            location="Gouda, Netherlands"
            title="Gymnasium, NT &amp; NG" />
        </div>
      </div>
    </div>
  </div>
)

export default Education
