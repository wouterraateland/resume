import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  position: relative;
  padding-left: 2.5em;
  margin-bottom: 2em;
`

const SectionTitle = styled.h2`
  position: absolute;
  left: 0; top: 0;

  margin: 0;

  writing-mode: vertical-lr;
  line-height: 1;

  opacity: .5;
`

const SectionDescription = styled.p`
`

const Section = ({ component: Component, data, title, description }) => (
  <StyledSection>
    <SectionTitle>{title}</SectionTitle>
    {description
      ? <SectionDescription>{description}</SectionDescription>
      : null}
    {Array.isArray(data)
      ? data.map((entity, i) => <Component key={i} {...entity} />)
      : <Component {...data} />
    }
  </StyledSection>
)

export default Section
