import React from 'react'
import styled from 'styled-components'

import Dribbble from './Dribbble'
import Email from './Email'
import Facebook from './Facebook'
import GitHub from './GitHub'
import LinkedIn from './LinkedIn'
import Phone from './Phone'
import Twitter from './Twitter'
import Web from './Web'

const BaseIcon = styled.svg`
  height: ${props => props.size}em;
  margin-right: .5em;

  fill: currentColor;
  stroke: currentColor;
  stroke-width: 0;
`

BaseIcon.defaultProps = {
  size: 1,
}

export default BaseIcon

export const Icon = ({ icon, ...rest }) => {
  switch (icon) {
    case "Dribbble": return <Dribbble {...rest} />
    case "Email":    return <Email {...rest} />
    case "Facebook": return <Facebook {...rest} />
    case "GitHub":   return <GitHub {...rest} />
    case "LinkedIn": return <LinkedIn {...rest} />
    case "Phone":    return <Phone {...rest} />
    case "Twitter":  return <Twitter {...rest} />
    case "Web":      return <Web {...rest} />
    default:         return null
  }
}

export {
  Dribbble,
  Email,
  Facebook,
  GitHub,
  LinkedIn,
  Phone,
  Twitter,
  Web
}
