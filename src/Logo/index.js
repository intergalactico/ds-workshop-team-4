import React from 'react'

import * as s from './styles.js'

const Logo = (props) => {
  return (
    <s.Logo><div style={{textAlign: 'center', display: 'inline'}}><img style={{width: '200px', margin: 0}} src={props.src} /></div></s.Logo>
  )
}

export default Logo
