import React from 'react'

import Section from './Section'
import DateRange from 'components/DateRange'
import Meta from 'components/Meta'

import activities from 'data/activities.json'

const Activity = ({ url, name, startDate, endDate, description }) => (
  <p>
    <strong>{url
      ? <a href={url} target="blank" rel="noopener noreferrer">{name}</a>
      : name
    }</strong>
    {' '}
    <Meta as="span">(<DateRange startDate={startDate} endDate={endDate} />)</Meta>
    <br />
    {description}
  </p>
)

const Activities = () => (
  <Section
    title="Personal Projects"
    description="Some titles link to more information..."
    component={Activity}
    data={activities}
  />
)

export default Activities
