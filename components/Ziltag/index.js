import React, {PropTypes} from 'react'

if (typeof window !== 'undefined') {
  require('./index.css')
}

const Ziltag = props => (
  <div className="z-ziltag" style={props.style}/>
)

Ziltag.propTypes = {
  style: PropTypes.object
}

export default Ziltag
