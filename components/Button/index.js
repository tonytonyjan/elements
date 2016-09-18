import React, { PropTypes } from 'react'
import styles from './index.scss'

export default props => {
  const {text, color, width} = props
  return (
    <button style={{width}} className={styles[color || 'red']}>{text}</button>
  )
}
