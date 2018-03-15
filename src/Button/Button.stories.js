/* Helpful imports */
import React from 'react';
import { storiesOf } from '@storybook/react';
/*
 * withInfo is an addon which provides a block with
 * information about the component. It includes the
 * code samples and properties documentation.
 */
import { withInfo } from '@storybook/addon-info';

/* The components to use in the stories */
import Box from 'Box';
import Icon from 'Icon';

/* The component to document */
import Button from '.';

storiesOf('Button', module) // eslint-disable-line no-undef
  .add('index',
    withInfo(`
 Button component provides interfaces for all types
 of the buttons. Different types of the buttons are coded
 as different components and imported here.
        `)(() => {
      return (
        <div>
          <Box>
            <Button color='white' style={{border: 'solid 1px #021a72'}} textColor="#021a72" href="#">I AM A LINK BUTTON</Button>
          </Box>
        </div>
      );
  }))
  .add('colors',
    withInfo()(() => {
      return (
        <div>
          <Box>
            <Button color='white' style={{border: 'solid 1px #021a72'}} textColor="#021a72" href="#">NORMAL</Button>
          </Box>
          <Box color="#494949">
            <Button color='none' style={{border: 'solid 1px white'}} textColor="white" href="#">INVERTED</Button>
          </Box>
        </div>
      );
  }))
  .add('with different size',
    withInfo()(() => {
      return (
        <div>
          <Box>
            <Button color='white' style={{border: 'solid 1px #021a72', fontSize: '14px'}} textColor="#021a72" href="#">SMALL</Button>
            <Button color='white' style={{border: 'solid 1px #021a72', fontSize: '16px'}} textColor="#021a72" href="#">MEDIUM</Button>
          </Box>
          <Box style={{width: '360px'}}>
            <Button color='white' style={{border: 'solid 1px #021a72', fontSize: '18px', width:"80%"}} textColor="#021a72" href="#">LARGE</Button>
          </Box>
          <Box color="#494949">
            <Button color='none' style={{border: 'solid 1px white', fontSize: '14px'}} textColor="white" href="#">SMALL</Button>
            <Button color='none' style={{border: 'solid 1px white', fontSize: '16px'}} textColor="white" href="#">MEDIUM</Button>
          </Box>
          <Box color="#494949" style={{width: '360px'}}>
            <Button color='none' style={{border: 'solid 1px white', fontSize: '18px', width:"80%"}} textColor="white" href="#">LARGE</Button>
          </Box>
        </div>
      );
  }))
  .add('with icon',
    withInfo()(() => {
      return (
        <Box>
          <Button color='#1b8ceb' textColor="#fff" size='1rem'>
            <Icon name='star' />
            Some text
          </Button>
          <Button color='#00d1b2' textColor="#fff" size='0.785rem' isOutlined>
            <Icon name='star' />
            Some text
          </Button>
          <Button color='#888888' textColor="#fff" tone={2} size='1rem' isIcon>
            <Icon name='stack-overflow' />
          </Button>
        </Box>
      );
  }));
