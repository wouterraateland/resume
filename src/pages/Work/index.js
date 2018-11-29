import React from 'react'
import './styles.css'

import Entry from 'components/Entry'

import sping from 'media/sping.png'
import vs from 'media/vs.png'
import wr from 'media/wr.png'
import tud from 'media/tud.png'

const Work = () => (
  <section className="Work">
    <h2>Work experience</h2>
    <Entry
      image={sping}
      org="Sping B.V." start={2017} end={2018}
      location="Delft, Netherlands"
      title="Developer"
      description="Worked mostly on the Ioniq Car Sharing application for Hyundai running in Amsterdam, where I was responsible for the API, back-end and the admin interface." />
    <Entry
      image={vs}
      org="Vlinderstorm" start={2015} end={2017}
      location="Amsterdam, Netherlands"
      title="Full stack web developer"
      description="Developed websites, webshops and web-based blockchain applications in close collaboration with both small and corporate clients.">
    </Entry>
    <Entry
      image={wr}
      org="Wouter Raateland Webdesign" start={2014} end="present"
      location="Delft, Netherlands"
      title="Freelance web developer"
      description="Designed and developed websites such as oras.nl, reportflip.com and the Punch team announcement tool.">
    </Entry>
    <Entry
      image={tud}
      org="Delft University of Technology" start="2015" end="2017"
      location="Delft, Netherlands"
      title="Teaching assistant"
      description="Helped students with assignments and graded their assignments and exams for different courses including 'Inleiding Programmeren', 'Object-oriented programming' and 'Web and Database Technology'." />
  </section>
)

export default Work
