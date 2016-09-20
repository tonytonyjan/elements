import React from 'react'
if(typeof window !== 'undefined') require('./index.css')

export default props => (
  <div className="z-ziltag" style={props.style}></div>
)
