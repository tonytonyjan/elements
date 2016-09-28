import React, {PropTypes} from 'react'

if (typeof window !== 'undefined') {
  require('./index.css')
}

const Button = props => {
  const {text, color, width, style, ...others} = props
  let className = 'z-button'
  if (color === 'gray') {
    className += ' z-button--gray'
  }
  style.width = width
  return <button style={style} className={className} {...others}>{text}</button>
}

Button.defaultProps = {
  style: {}
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.oneOf(['gray']),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Button
