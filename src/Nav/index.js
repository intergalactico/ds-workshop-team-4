import React from 'react'
import Icon from '../Icon';
import styled from 'styled-components';

import * as s from './styles.js'
import logo from '../../assets/dsconf-logo-small.png';
import colors from '../Colors/colorset'


const Nav = (props) => {
  return (
    <s.Nav>
        <img src={logo} width="152" />
	   <Icon name="bars" color={colors.darkwhite} style={{float: 'right', 'margin-top': '5px'}}/>
    </s.Nav>
  )
}

export default Nav
