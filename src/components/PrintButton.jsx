import React from 'react'
import styled from 'styled-components'

const StyledPrintButton = styled.button`
  position: fixed;
  left: 50%;
  bottom: 2em;

  display: inline-block;
  width: 4em;
  height: 4em;

  border: none;
  border-radius: 100%;

  line-height: 4em;
  text-align: center;
  font-weight: bold;

  box-shadow: 0 .5em 1.5em -.5em #0008;

  background-color: #26f;
  color: #fff;

  transform: translate(-50%, 0);

  transition:
    box-shadow .2s ease-out,
    transform .2s ease-out,
    background-color .2s ease-out;

  &:hover {
    box-shadow: 0 1em 3em -.5em #0006;

    background-color: #03f;

    transform: translate(-50%, -.125em);
  }

  @media print {
    display: none;
  }
`

const PrintButton = () => {
  function handleClick() {
    window.print()
  }

  return (
    <StyledPrintButton onClick={handleClick}>Print</StyledPrintButton>
  )
}

export default PrintButton
