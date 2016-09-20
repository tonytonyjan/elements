import React from 'react'
import Warning from 'react-icons/lib/md/warning'

if(typeof window !== 'undefined') require('./index.css')

export default props => {
  const {error, width, ...others} = props
  const inputStyle = {
    width: width || 150,
    borderBottomColor: error && '#F44336'
  }
  return (
    <div className="z-text-field" style={{width}}>
      <input type="text" className="z-text-field__input" style={inputStyle} {...others} />
      { error && (
        <div className="z-text-field__error">
          <div className="z-text-field__error-text">{error}</div>
          <Warning className="z-text-field__error-icon" />
        </div>
      )}
    </div>
  )
}
