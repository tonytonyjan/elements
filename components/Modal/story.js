import React from 'react'
import {storiesOf, action} from '@kadira/storybook'
import Modal from '.'

storiesOf('Modal', module)
  .add('Normal', () => (
    <Modal isOpen onRequestClose={action('close')}><h1>Normal</h1></Modal>
  ))
  .add('Tall Content', () => (
    <Modal isOpen>
      <div style={{height: 1024, backgroundColor: 'gray'}}>
        Tall Content (max-height: 75vh)
      </div>
    </Modal>
  ))
