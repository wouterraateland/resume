import React from 'react'

import Paper from 'components/Paper'
import { Column } from 'components/ui'

import {
  Activities,
  Education,
  Introduction,
  Links,
  Skills,
  Work
} from 'components/sections'

const App = () => {
  return (
    <Paper>
      <Introduction />
      <Column size={4}>
        <Education />
        <Skills />
        <Links />
      </Column>
      <Column size={8}>
        <Work />
        <Activities />
      </Column>
    </Paper>
  )
}

export default App
