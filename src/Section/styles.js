import styled, { css } from 'styled-components'

export const Section = styled.div`
  background: ${p => p.backgroundColor};
  background-image: url(${p => p.image}) !important;
  width: 100%;
  padding: 0 10%;
`
