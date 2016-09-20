import React from 'react'
import {storiesOf} from '@kadira/storybook'
import TextField from '.'

storiesOf('TextField', module)
  .add('Normal', () => (
    <TextField placeholder="Hint text"/>
  ))
  .add('Fixed Width', () => (
    <TextField placeholder="Hint text" width={300}/>
  ))
  .add('Full Width', () => (
    <TextField placeholder="Hint text" width="100%"/>
  ))
  .add('With Error', () => (
    <TextField width={240} error="Username or Password is incorrect." placeholder="Hint text"/>
  ))
