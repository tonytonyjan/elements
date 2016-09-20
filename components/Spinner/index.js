import React from 'react'
if(typeof window !== 'undefined') require('./index.css')

export default () => (
  <div className="z-spinner">
    <div className="z-spinner__continaer">
      <div className="z-spinner__logo"></div>
      <div className="z-spinner__circle"></div>
    </div>
    <div className="z-spinner__text">loading</div>
  </div>
)
