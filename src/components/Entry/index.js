import React from 'react'
import './styles.css'

import Thumbnail from 'components/Thumbnail'

const Entry = ({ image, org, start, end, location, title, children }) => (
  <div className="Entry row">
    <Thumbnail image={image} alt={org} />
    <h3>{org} <em>({start}{end ? ` - ${end}` : ``})</em></h3>
    <p className="tagline">{location}. {title}</p>
    {children
      ? <div className="Entry-projects row">{children}</div>
      : ''}
  </div>
)

export default Entry
