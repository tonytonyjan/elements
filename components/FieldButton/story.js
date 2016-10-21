import React from 'react'
import {storiesOf, action} from '@kadira/storybook'
import FieldButton from '.'

storiesOf('Field Button', module)
  .add('Normal', () => (
    <FieldButton
      buttonText="Preview on your website"
      placeholder="Please enter your website’s URL…"
      onRequestSend={action('onRequestSend')}
      type="url"
      />
  ))
