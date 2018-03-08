import React from 'react'
import './styles.css'

import Thumbnail from 'components/Thumbnail'

const Entry = ({ image, org, start, end, location, title, description, children }) => (
  <div className={`Entry row${image ? ` has-image` : ``}`}>
    { image ? <Thumbnail image={image} alt={org} /> : `` }
    <em className="period">({start}{end ? ` - ${end}` : ``})</em>
    { org ? <h3>{org}</h3> : `` }
    { title || start || end
      ? <p className="tagline">{title}</p>
      : `` }
    { description
      ? <p className="Entry-description">{description}</p>
      : `` }
    {children
      ? <div className="Entry-projects row">{children}</div>
      : ''}
  </div>
)

export default Entry
