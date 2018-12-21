import React from 'react'
import styled from 'styled-components'

import { Align } from 'components/ui'
import { Email, Phone, Web } from 'components/icons'

const Name = styled.h1`
  margin-bottom: 0;
`

const Links = styled.p`
  margin-top: .5em;
`

const Link = styled.a`
  margin: 0 .25cm;
`

const Introduction = () => (
  <Align.Center>
    <Name>Wouter Raateland</Name>
    <Links>
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
    </Links>
  </Align.Center>
)

export default Introduction
