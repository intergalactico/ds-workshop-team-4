/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'
import ReactDOM from 'react-dom'


import { Box, Button, Colors, Icon, Nav, Page, Section, TeamMember, Typography } from '../lib/my-awesome-library';

const st = Section.SectionTypography;

const Home = () => {
  return (
    <Page />
  )
}

export default Home;
