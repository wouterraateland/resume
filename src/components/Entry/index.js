import React from 'react'
import './styles.css'

import Thumbnail from 'components/Thumbnail'

const Entry = ({ image, org, start, end, location, title, children }) => (
  <div className={`Entry row${image ? ` has-image` : ``}`}>
    { image ? <Thumbnail image={image} alt={org} /> : `` }
    { org ? <h3>{org} <em>({start}{end ? ` - ${end}` : ``})</em></h3> : `` }
    { location || title
      ? <p className="tagline">{location ? `${location}. ` : ``}{title}</p>
      : `` }
    {children
      ? <div className="Entry-projects row">{children}</div>
      : ''}
  </div>
)

export default Entry
