import React from 'react'
import {storiesOf, action} from '@kadira/storybook'
import FieldButton from '.'

storiesOf('Field Button', module)
  .add('Normal', () => (
    <FieldButton
      buttonText="Preview on your website"
      placeholder="Please enter your website’s URL…"
      onRequestSend={action('onRequestSend')}
      />
  ))
  .add('中文測試', () => (
    <FieldButton
      buttonText="體驗你的網站"
      placeholder="請輸入你的網站的網址⋯⋯"
      onRequestSend={action('onRequestSend')}
      />
  ))
