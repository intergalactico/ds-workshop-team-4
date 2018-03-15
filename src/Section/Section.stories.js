import React from 'react'
import { storiesOf } from '@storybook/react'

import Section from '.'

storiesOf('Section', module)
  .add('index', () => (
    <div>
        <Section backgroundColor="red"/>
        <Section backgroundColor="blue"/>
        <Section image="red"/>
    </div>
  ))
