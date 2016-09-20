import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Spinner from '.'

storiesOf('Spinner', module)
  .add('Normal', () => (
    <Spinner/>
  ))
