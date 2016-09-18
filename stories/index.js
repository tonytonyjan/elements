import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Button from '../components/Button'

storiesOf('Button', module)
  .add('Red', () => (
    <Button text="Red"/>
  ))
  .add('Gray', () => (
    <Button color="gray" text="Gray"/>
  ))
  .add('Fixed Width', () => (
    <Button width={200} text="Fixed Width"/>
  ))
