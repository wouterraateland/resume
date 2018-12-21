import React from 'react'
import styled from 'styled-components'

import Section from './Section'
import DateRange from 'components/DateRange'

import work from 'data/work.json'

const Heading = styled.div`
  margin-block-start: 1.17em;
`

const Organisation = styled.h3`
  display: inline-block;
  margin: 0;
`

const Title = styled.h4`
  display: inline-block;
  margin: 0;
  line-height: 1.404;
`

const Meta = styled.p`
  margin: 0;
  color: #0009;
`

const Description = styled.p`
  margin-top: 0;
`

const Experience = ({ organisation, title, description,
                      startDate, endDate, location }) => (
  <>
    <Heading>
      <Organisation>{organisation}</Organisation>
      <Title>&nbsp;|&nbsp;{title}</Title>
    </Heading>
    <Meta>
      <DateRange startDate={startDate} endDate={endDate} significance={2} />
      {' | '}
      {location}
    </Meta>
    <Description>{description}</Description>
  </>
)

const Work = () => (
  <Section
    title="Industry & Research Experience"
    component={Experience}
    data={work}
  />
)

export default Work
