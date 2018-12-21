import styled from 'styled-components'

const Column = styled.div`
  display: block;
  padding-left: .5cm;
  padding-right: .5cm;
  float: left;

  width: ${props => 100 * props.size / 12}%;
`

export default Column
