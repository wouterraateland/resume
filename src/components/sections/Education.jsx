import React from 'react'
import styled from 'styled-components'

import Section from './Section'
import DateRange from 'components/DateRange'
import Meta from 'components/Meta'

import education from 'data/education.json'

const Institution = styled.h3`
  margin-bottom: 0;
`

const Title = styled.h4`
  margin: 0;
`

const Education = ({ institution, title, startDate, endDate,
                     location, grade }) => (
  <>
    <Institution>{institution}</Institution>
    <Title>{title} ({grade})</Title>
    <Meta>
      <DateRange startDate={startDate} endDate={endDate} />
      {' | '}
      {location}
    </Meta>
  </>
)

const Educations = () => (
  <Section
    title="Education"
    component={Education}
    data={education}
  />
)

export default Educations
