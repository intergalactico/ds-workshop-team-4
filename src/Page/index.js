import React from 'react'
import Section from '../Section/index'
import Nav from '../Nav/index'

import * as s from './styles.js'

const Page = (props) => {
  return (
    <s.Page>Page
      <Section backgroundColor='#fafafa'>
      <Nav />
      </Section>

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
