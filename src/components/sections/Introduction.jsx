import React from 'react'
import styled from 'styled-components'

import { Align } from 'components/ui'
import { Email, Phone, Web } from 'components/icons'

const Link = styled.a`
  margin: 0 1em;
`

const Introduction = () => (
  <Align.Center>
    <h1>Wouter Raateland</h1>
    <p>
      <Link href="mailto:wouterraateland@gmail.com">
        <Email />
        wouterraateland@gmail.com
      </Link>
      <Link href="tel:+31648271371">
        <Phone />
        +31 6 48 27 13 71
      </Link>
      <Link href="https://wouterraateland.nl">
        <Web />
        wouterraateland.nl
      </Link>
    </p>
    <hr />
  </Align.Center>
)

export default Introduction
