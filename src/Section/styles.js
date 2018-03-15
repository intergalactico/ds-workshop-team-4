import styled, { css } from 'styled-components';
import colors from '../Colors/colorset';

export const Section = styled.div`
  background: ${p => p.backgroundColor};
  background-image: url(${p => p.image}) !important;
  background-repeat: no-repeat;
  background-position: 50% 0%;
  width: 100%;
  padding: 60px 20px;

`
