import React from 'react'

import './styles.css'

import Introduction from 'pages/Introduction'
import Education from 'pages/Education'
import Work from 'pages/Work'
import Projects from 'pages/Projects'
import Skills from 'pages/Skills'
import Hobbies from 'pages/Hobbies'
import Contact from 'pages/Contact'

const App = () => (
  <div className="App">
    <Introduction
      name="Wouter Raateland"
      link="https://wouterraateland.github.io/resume"/>
    <Education />
    <Work />
    <Projects />
    <Skills />
    <Hobbies />
    <Contact />
  </div>
)

export default App
