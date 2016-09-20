import React, {PropTypes} from 'react'
import Close from 'react-icons/lib/md/close'

if (typeof window !== 'undefined') {
  require('./index.css')
}

const Model = props => (
  <div className="z-modal" onClick={props.onRequestClose} style={{display: !props.isOpen && 'none'}}>
    <div className="z-modal__body" onClick={e=>e.stopPropagation()}>
      {props.children}
      <Close className="z-modal__close" size={40} onClick={props.onRequestClose} />
    </div>
  </div>
)

Model.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  onRequestClose: PropTypes.func
}

export default Model
