import React from 'react'
import {storiesOf} from '@kadira/storybook'
import TextField from '../TextField'
import Button from '../Button'
import Modal from '../Modal'
import Form from '.'

const form = (
  <Form
    fields={[
      <TextField width="100%" placeholder="field 1"/>,
      <TextField width="100%" placeholder="field 2"/>,
      <TextField width="100%" placeholder="field 3"/>
    ]}
    tip={<div>By signing up, you agree to our <a href="http://blog.ziltag.com/terms" target="_blank" rel="noopener noreferrer">terms</a> and <a href="http://blog.ziltag.com/privacy/" target="_blank" rel="noopener noreferrer">privacy policy</a>.</div>}
    button={<Button width="100%" text="Submit"/>}
    footer={<div>Already have an account? <a href="#">Sign In</a></div>}
    />
)

storiesOf('Form', module)
  .add('Normal', () => (
    <div style={{width: 400}}>{form}</div>
  ))
  .add('WithModal', () => (
    <Modal isOpen>{form}</Modal>
  ))
