import React from 'react'
import styled from 'styled-components'

import Section from './Section'
import DateRange from 'components/DateRange'
import Meta from 'components/Meta'

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

const Description = styled.p`
  margin-top: 0;
`

const Experience = ({ organisation, url, title, description,
                      startDate, endDate, location }) => (
  <>
    <Heading>
      <Organisation>
        {url
          ? <a
              href={url}
              target="blank"
              rel="noopener noreferrer"
            >
              {organisation}
            </a>
          : organisation
        }
      </Organisation>
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
    description="All titles link to more information!"
    component={Experience}
    data={work}
  />
)

export default Work
