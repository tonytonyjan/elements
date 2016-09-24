import React, {PropTypes} from 'react'
import Close from 'react-icons/lib/md/close'

if (typeof window !== 'undefined') {
  require('./index.css')
}

const Model = props => {
  const {isOpen, onRequestClose, isCenterMode, children} = props
  let className = 'z-modal'
  if (isCenterMode) {
    className += ' z-modal--center'
  }
  return (
    isOpen &&
      <div className={className} onClick={onRequestClose}>
        <div className="z-modal__body" onClick={stopPropagation}>
          {children}
          <Close className="z-modal__close" size={40} onClick={onRequestClose}/>
        </div>
      </div>
  )
}

Model.propTypes = {
  isCenterMode: PropTypes.bool,
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  onRequestClose: PropTypes.func
}

Model.defaultProps = {
  isCenterMode: false,
  isOpen: false
}

function stopPropagation(e) {
  e.stopPropagation()
}

export default Model
