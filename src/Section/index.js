import React from 'react'

import * as s from './styles.js'

const Section = (props) => {
  return (
    <s.Section image={props.image} backgroundColor={props.backgroundColor}>{props.children}</s.Section>
  )
}

export default Section
