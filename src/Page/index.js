import React from 'react'
import Section from '../Section/index'
import Nav from '../Nav/index'

import heroBackground from '../../assets/dsconf-wide.jpg';
import newBackground from '../../assets/newBackground.jpg';
import logo from '../../assets/dsconf-logo.png';

import * as s from './styles.js'
import * as ts from '../Typography/styles.js';
import Button from '../Button/index'


import TeamMember from '../TeamMember/index';
import colors from '../Colors/colorset';

import blueBackgroundImg from '../../assets/dsconf2-wide.jpg';

import elisa from '../../assets/Elisa.png';
import abstract from '../../assets/abstract-dark.png';
import eficode from '../../assets/eficode-light.png';
import futurice from '../../assets/futurice-light.png';
import idean from '../../assets/idean-light.png';
import intergalactico from '../../assets/intergalactico-dark.png';
import smartly from '../../assets/smartly-dark.png';

import Logo from '../Logo/index';



const Page = (props) => {
  return (
    <s.Page style={{width: "320px"}}>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Assistant:200,300,400,600,700,800');
      </style>
      <Section image={ newBackground }>
        <Nav />
        <img src={ logo } width="30%" style={{margin: "15% 35% 10% 35%"}} />
        <ts.Header1>A DESIGN SYSTEMS CONFERENCE</ts.Header1>
        <ts.Header2>March 14th - 15th, 2018 in Helsinki, Finland</ts.Header2>
        <Button
          color="none"
          style={{border: "solid 2px white", margin:"30px auto", "fontSize": "19px", "width": "100%", "font-family": "Assistant, sans-serif", "font-weight": "800", "padding": "20px"}}
          textColor="white"
          href="#">
          Buy worksbop tickets
          </Button>

      </Section>
      <Section backgroundColor="#0098B0">
        <ts.Header2>A two-day conference with one day of keynotes & one day of workshops.</ts.Header2>
        <ts.PWhite>DSCONF aims to bring people together to exchange ideas, solutions, inspiration, and learn how to build digital products better and more efficiently with Design Systems.
          An event for digital product designers, builders, business owners and organizations who want to learn how to build design systems and why they are needed in the future. We are at a crossroads whereby making the right decisions, you will gain a significant business advantage and ensure the best possible user experience for your digital products and services.
          Sounds good? Make sure you familiarize yourself with our code of conduct.</ts.PWhite>
      </Section>
      <Section backgroundColor="#FAFAFA">
        <TeamMember
          name="Donald Duck"
          title="Director of Everything"
          social={{twitter: "donaldducknl" }}
          avatar="/7d4662477a7be3fbf57a81907d19c595.jpg"
        />
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
      <Section backgroundColor="#FF5100">
        <ts.Header2>A venue dedicated to learning, at the heart of the city!</ts.Header2>
        <ts.PWhite>The conference will be held at Helsinki university’s Great Hall which is a gorgeous space and has a rich history. It’s practically in the center of Helsinki and next to the well known Helsinki Cathedral.
          <br />Evening party after the conference day will take place at Restaurant Teatteri. Party site is just 500 meters / 5min walk away from the conference site.</ts.PWhite>
        <div style={{textAlign: "center"}}>
          <Button
            color="none"
            style={{border: "solid 1px white", margin:"30px auto"}}
            textColor="white"
            href="#"
          >
            VENUE & LOCATION</Button>
        </div>
      </Section>
      <Section backgroundColor="black" style={{textAlign: 'center'}}>
        <ts.Header2Centered>Main organiser</ts.Header2Centered>
        <Logo src={ elisa } />
        <ts.Header2Centered>Partners</ts.Header2Centered>
        <Logo src={ abstract } />
        <Logo src={ eficode } />
        <Logo src={ futurice } />
        <Logo src={ idean } />
        <Logo src={ intergalactico } />
        <Logo src={ smartly } />
        {/*<ts.Header2Centered>Supported by</ts.Header2Centered>*/}
      </Section>

      <Section id="gray-form-feed" backgroundColor="#0098B0">
        <ts.Header2>Stay up to date</ts.Header2>
        <ts.PWhite>
          We will use the information you provided to share with you the information on when the tickets launch, and critical updates about the event.
        </ts.PWhite>
        <p>
          <s.input id="et_pb_signup_firstname" className="input" type="text" placeholder="Name" name="et_pb_signup_firstname" />
        </p>
        <p>
          <s.input id="et_pb_signup_firstname" className="input" type="text" placeholder="Email" name="et_pb_signup_firstname" />
        </p>
        <Button
          color="none"
          style={{border: "solid 1px white", margin:"30px 0", fontSize: "18px", width: "100%"}}
          textColor="white"
          href="#"
        >SUBSCRIBE</Button>
      </Section>

    </s.Page>
  )
}

export default Page
