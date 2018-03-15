import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info';
import Section from '.'
import avatar from '../../assets/dsconf-wide.jpg';

storiesOf('Section', module)
  .add('index', withInfo()(() => {
    return (
    <div>
        <Section backgroundColor="red">Section 1</Section>
        <Section backgroundColor="blue">Section 2</Section>
        <Section image={avatar}>Section 3 with backgournimage</Section>
    </div>
    );
}))
