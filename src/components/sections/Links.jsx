import React from 'react'

import Section from './Section'
import { Icon } from 'components/icons'

import links from 'data/links.json'

const Link = ({ type, content, url }) => (
  <p>
    <a href={url}>
      <Icon icon={type} />
      {content}
    </a>
  </p>
)

const Links = () => (
  <Section
    title="Links"
    component={Link}
    data={links}
  />
)

export default Links
