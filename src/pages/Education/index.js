import React from 'react'
import './styles.css'

import Entry from 'components/Entry'

import ebs from 'media/ebs.png'
import tud from 'media/tud.png'

const Education = () => (
  <section className="Education">
    <h2>Education</h2>
    <Entry
      image={tud}
      org="Delft University of Technology" start="2015" end="present"
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
  </section>
)

export default Education
