import React from 'react'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info';
import Section from '.'
import avatar from '../../assets/dsconf-wide.jpg';
import * as ts from '../Typography/styles.js';
import colors from '../Colors/colorset';
import Button from '../Button/index';

storiesOf('Section', module)
    .add('index', withInfo()(() => {
        return (
            <div style={{width: "350px"}}>
                <Section backgroundColor="#0E1116">
                    <ts.Header2>A two-day conference with one day of keynotes & one day of workshops.</ts.Header2>
                    <ts.PWhite>DSCONF aims to bring people together to exchange ideas, solutions, inspiration, and learn how to build digital products better and more efficiently with Design Systems.
                      An event for digital product designers, builders, business owners and organizations who want to learn how to build design systems and why they are needed in the future. We are at a crossroads whereby making the right decisions, you will gain a significant business advantage and ensure the best possible user experience for your digital products and services.
                      Sounds good? Make sure you familiarize yourself with our code of conduct.</ts.PWhite>
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
            </div>
        );
    }))
