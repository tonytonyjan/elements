import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Ziltag from '.'

storiesOf('Ziltag', module)
  .add('Normal', () => (
    <Ziltag />
  ))
  .add('With Image', () => (
    <div style={{position: 'relative', display: 'inline-block'}}>
      <img src="http://fakeimg.pl/500x200/" />
      <div style={{position: 'absolute', top: '50%', left: '50%', marginLeft: -8, marginTop: -8}}>
        <Ziltag />
      </div>
      <div style={{position: 'absolute', top: '25%', left: '75%', marginLeft: -8, marginTop: -8}}>
        <Ziltag />
      </div>
      <div style={{position: 'absolute', top: '75%', left: '25%', marginLeft: -8, marginTop: -8}}>
        <Ziltag />
      </div>
    </div>
  ))
