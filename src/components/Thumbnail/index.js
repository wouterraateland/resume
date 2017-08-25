import React from 'react'

import './styles.css'

const Thumbnail = ({ image, alt }) => (
  <div className="Thumbnail alignleft">
    <img src={image} alt={alt} />
  </div>
)

export default Thumbnail
