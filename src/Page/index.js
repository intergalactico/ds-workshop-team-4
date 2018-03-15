import React from 'react'
import Section from '../Section/index'

import * as s from './styles.js'

const Page = (props) => {
  return (
    <s.Page>Page
      <Section></Section>
      <section id="navbar"></section>
      <section id="hero"></section>
      <section id="blue-info"></section>
      <section id="white-keynotes"></section>
      <section id="blue-tickets"></section>
      <section id="blue-venue"></section>
      <section id="black-partners"></section>
      <section id="gray-form-feed"></section>
      <section id="footer"></section>
    </s.Page>
  )
}

export default Page
