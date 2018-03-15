import React from 'react'
import Section from '../Section/index'
import Nav from '../Nav/index'

import heroBackground from '../../assets/dsconf-wide.jpg';
import logo from '../../assets/dsconf-logo.png';

import * as s from './styles.js'
import * as ts from '../Typography/styles.js';



const Page = (props) => {
  return (
    <s.Page style={{width: "320px"}}>
      <Section image={ heroBackground }>
        <Nav />
        <img src={ logo } width="30%" style={{margin: "35%"}} />
        <ts.Header1>A DESIGN SYSTEMS CONFERENCE</ts.Header1>
        <ts.Header2>MARCH 14th – 15th, 2018
                    IN HELSINKI, FINLAND</ts.Header2>

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
