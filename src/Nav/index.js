import React from 'react'
import Icon from '../Icon';

import * as s from './styles.js'
import logo from '../../assets/dsconf-logo-small.png';

import colors from '../Colors/colorset'

export const Menu = Icon`
  float: right;
`;



const Nav = (props) => {
  return (

    <s.Nav>
    <img src={logo} width="152" />
	<Icon name="bars" color={colors.darkwhite} />
    </s.Nav>
  )
}

export default Nav
