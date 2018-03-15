import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info';
import Section from '.'
import avatar from '../../assets/dsconf-wide.jpg';
import * as ts from '../Typography/styles.js';

storiesOf('Section', module)
  .add('index', withInfo()(() => {
    return (
    <div>
        <Section backgroundColor="red">Section 1</Section>
        <Section backgroundColor="#333333">
            <ts.Header2 textColor="white">A two-day conference with one day of keynotes & one day of workshops.</ts.Header2>
        </Section>
        <Section image={avatar}>Section 3 with backgournimage</Section>
    </div>
    );
}))
