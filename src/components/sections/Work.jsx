import React from 'react'

import Section from './Section'

import links from 'data/links.json'

const Link = ({ label, content, url }) => (
  <p>
    <strong>{label}: </strong>
    <a href={url}>{content}</a>
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
