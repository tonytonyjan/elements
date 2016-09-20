import React from 'react'
if(typeof window !== 'undefined') require('./index.css')

module.exports = props => (
  <div className="z-ziltag" style={props.style}></div>
)
