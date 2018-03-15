import React from 'react'
import { storiesOf } from '@storybook/react'

import Nav from '.'

storiesOf('Nav', module)
  .add('index', () => (
  	<div style={{backgroundColor: "black"}}>
    <Nav />
    </div>
  ))
