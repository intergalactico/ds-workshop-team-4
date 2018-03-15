import React from 'react'
import { storiesOf } from '@storybook/react'

import Page from '.'

storiesOf('Page', module)
  .add('index', () => (
    <Page />
  ))
