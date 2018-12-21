import React from 'react'
import styled from 'styled-components'

import Section from './Section'
import DateRange from 'components/DateRange'

import activities from 'data/activities.json'

const Meta = styled.span`
  color: #0009;
`

const Activity = ({ name, startDate, endDate, description }) => (
  <p>
    <strong>{name}</strong>
    {' '}
    <Meta>(<DateRange startDate={startDate} endDate={endDate} />)</Meta>
    <br />
    {description}
  </p>
)

const Activities = () => (
  <Section
    title="Activities"
    component={Activity}
    data={activities}
  />
)

export default Activities
