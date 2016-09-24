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
  .add('Video', () => (
    <Modal isCenterMode isOpen onRequestClose={action('close')}>
      <iframe width="100%" height="100%" style={{border: 'none'}} src="https://www.youtube-nocookie.com/embed/lPmIZy5B7-Y?rel=0&amp;showinfo=0" frameBorder="0" allowFullScreen/>
    </Modal>
  ))
