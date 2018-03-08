import React from 'react'

import './styles.css'

import Introduction from 'pages/Introduction'
import Education from 'pages/Education'
import Work from 'pages/Work'
import Summary from 'pages/Summary'
import Projects from 'pages/Projects'
import Misc from 'pages/Misc'

const App = () => (
  <div className="App">
    <div className="two-col">
      <Introduction />
      <Work />
      <Education />
    </div>
    <div className="two-col">
      <Summary />
      <Projects />
      <Misc />
    </div>
  </div>
)

export default App
