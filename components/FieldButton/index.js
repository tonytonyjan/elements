import React, {PropTypes} from 'react'
import Send from 'react-icons/lib/md/send'

if (typeof window !== 'undefined') {
  require('./index.css')
}

class FieldButton extends React.Component {
  static propTypes = {
    buttonText: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    defaultWidth: PropTypes.number.isRequired,
    extendedWidth: PropTypes.number.isRequired,
    onRequestSend: PropTypes.func
  }

  static defaultProps = {
    defaultWidth: 210,
    extendedWidth: 350
  }

  constructor(props) {
    super(props)
    this.state = {mode: 'button'}
    this.handleFocus = this._handleFocus.bind(this)
    this.handleBlur = this._handleBlur.bind(this)
    this.handleKeyPress = this._handleKeyPress.bind(this)
    this.handleMouseDown = this._send.bind(this)
  }

  render() {
    const {
      buttonText, placeholder, defaultWidth, extendedWidth,
      onRequestSend, // eslint-disable-line no-unused-vars
      ...others
    } = this.props
    let className = 'z-field-button__input'
    if (this.state.mode === 'field') {
      className += ' z-field-button__input--focus'
    }
    const width = this.state.mode === 'field' ? extendedWidth : defaultWidth
    const style = {width}
    const self = this
    return (
      <div className="z-field-button">
        <input
          ref={function (c) {
            self._input = c
          }}
          size={buttonText.length}
          className={className}
          placeholder={this.state.mode === 'field' ? placeholder : buttonText}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onKeyPress={this.handleKeyPress}
          style={style}
          required
          {...others}
          />
        <Send className="z-field-button__send" onMouseDown={this.handleMouseDown}/>
      </div>
    )
  }

  _handleFocus() {
    this.setState({mode: 'field'})
  }

  _handleBlur() {
    const mode = this._input.value.length > 0 ? 'field' : 'button'
    this.setState({mode})
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this._send()
    }
  }

  _send() {
    this.props.onRequestSend(this._input.value)
  }
}

export default FieldButton
