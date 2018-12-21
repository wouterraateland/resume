import React from 'react'

import Paper from 'components/Paper'
import Main from 'components/Main'
import { Column } from 'components/ui'

import {
  Activities,
  Education,
  Introduction,
  Links,
  Work
} from 'components/sections'

import PrintButton from 'components/PrintButton'

const App = () => {
  return (
    <>
      <Paper>
        <Introduction />
        <Main>
          <Column size={4}>
            <Education />
            <Activities />
            <Links />
          </Column>
          <Column size={8}>
            <Work />
          </Column>
        </Main>
      </Paper>
      <PrintButton />
    </>
  )
}

export default App
