import React, { PropTypes } from 'react'
import './index.css'

export default props => {
  const {text, color, width, ...others} = props
  let className = 'z-button'
  if(color == 'gray') className += ' z-button--gray'
  return <button style={{width}} className={className} {...others}>{text}</button>
}
