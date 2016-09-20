import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Ziltag from '.'

storiesOf('Ziltag', module)
  .add('Normal', () => (
    <Ziltag />
  ))
