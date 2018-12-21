import React from 'react'

import Section from './Section'

const Skills = ({ text }) => <p>{text}</p>

const SkillsSection = () => (
  <Section
    title="Skills"
    data={{ text: "Yoo MOFO, waddup waddup, gaat ie lekker of sup?" }}
    component={Skills}
  />
)

export default SkillsSection
