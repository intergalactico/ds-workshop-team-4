import React from 'react'
import Section from '../Section/index'
import Nav from '../Nav/index'

import heroBackground from '../../assets/dsconf-wide.jpg';
import logo from '../../assets/dsconf-logo.png';

import * as s from './styles.js'
import * as ts from '../Typography/styles.js';
import Button from '../Button/index'



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
      <Section backgroundColor="#0E1116">
        <ts.Header2>A two-day conference with one day of keynotes & one day of workshops.</ts.Header2>
        <ts.PWhite>DSCONF aims to bring people together to exchange ideas, solutions, inspiration, and learn how to build digital products better and more efficiently with Design Systems.
          An event for digital product designers, builders, business owners and organizations who want to learn how to build design systems and why they are needed in the future. We are at a crossroads whereby making the right decisions, you will gain a significant business advantage and ensure the best possible user experience for your digital products and services.
          Sounds good? Make sure you familiarize yourself with our code of conduct.</ts.PWhite>
      </Section>
      <Section backgroundColor="#F8FBFE">
      </Section>
      <Section backgroundColor="#0E1116">
        <ts.Header2>450 seats reserved. Tickets are sold out.</ts.Header2>
        <ts.PWhite>Conference tickets are now sold out! We are excited to welcome you to Helsinki, Finland! There are some seats left for workshops and you can still purchase them till day before the conference. Please keep in mind that you can attend only one full day workshop. Why? Because they all are run on the same day.</ts.PWhite>
        <div style={{textAlign: "center"}}>
          <Button
            color="none"
            style={{border: "solid 1px white", margin:"30px auto"}}
            textColor="white"
            href="#"
          >
            WORKSHOP TICKETS</Button>
        </div>
      </Section>
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
