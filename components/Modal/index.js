import React, {PropTypes} from 'react'
import Close from 'react-icons/lib/md/close'

if (typeof window !== 'undefined') {
  require('./index.css')
}

const Model = props => {
  const {isOpen, onRequestClose, mode, children, showClose, padding} = props
  let className = 'z-modal'
  if (mode === 'center') {
    className += ' z-modal--center'
  }
  let bodyClass = 'z-modal__body'
  if (padding == 'small') {
    bodyClass += ' z-modal__body--small'
  }
  return (
    isOpen &&
      <div className={className} onClick={onRequestClose}>
        <div className={bodyClass} onClick={stopPropagation}>
          {children}
          {showClose && <Close className="z-modal__close" size={40} onClick={onRequestClose}/>}
        </div>
      </div>
  )
}

Model.propTypes = {
  mode: React.PropTypes.oneOf(['normal', 'center']),
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  onRequestClose: PropTypes.func
}

Model.defaultProps = {
  mode: 'normal',
  isOpen: false,
  showClose: true
}

function stopPropagation(e) {
  e.stopPropagation()
}

export default Model
