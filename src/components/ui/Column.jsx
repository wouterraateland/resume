import styled from 'styled-components'

const Column = styled.div`
  display: block;
  padding-left: .25cm;
  padding-right: .25cm;
  float: left;

  width: ${props => 100 * props.size / 12}%;
`

export default Column
