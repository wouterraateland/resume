import React from 'react'
import { render, hydrate } from 'react-dom'
import './reset.css'
import './index.css'
import * as serviceWorker from './serviceWorker'

import App from 'components/App'

const Root = (
  <App />
)

const root = document.getElementById('root')

if (root.hasChildNodes()) {
  hydrate(Root, root)
} else {
  render(Root, root)
}

serviceWorker.unregister()
