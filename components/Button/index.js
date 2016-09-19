import React, { PropTypes } from 'react'

if(typeof window !== 'undefined') require('./index.css')

module.exports = props => {
  const {text, color, width, ...others} = props
  let className = 'z-button'
  if(color == 'gray') className += ' z-button--gray'
  return <button style={{width}} className={className} {...others}>{text}</button>
}
