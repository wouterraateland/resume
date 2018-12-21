import React from 'react'
import styled from 'styled-components'

import Section from './Section'
import { Icon } from 'components/icons'

import links from 'data/links.json'

const StyledLink = styled.p`
  margin: .6em 0;
`

const Link = ({ type, content, url }) => (
  <StyledLink>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Icon icon={type} />
      {content}
    </a>
  </StyledLink>
)

const Links = () => (
  <Section
    title="Links"
    component={Link}
    data={links}
  />
)

export default Links
