import React from 'react'
import { configure, addDecorator } from '@kadira/storybook';

addDecorator((story) => (
  <div style={{fontFamily: 'Roboto'}}>
    {story()}
  </div>
));

const req = require.context('../components', true, /story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
