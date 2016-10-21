import React, {PropTypes} from 'react'
import Send from 'react-icons/lib/md/send'

if (typeof window !== 'undefined') {
  require('./index.css')
}

class FieldButton extends React.Component {
  static propTypes = {
    buttonText: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onRequestSend: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {mode: 'button'}
    this.handleFocus = this._handleFocus.bind(this)
    this.handleBlur = this._handleBlur.bind(this)
    this.handleKeyPress = this._handleKeyPress.bind(this)
    this.handleMouseDown = this._send.bind(this)
  }

  componentDidMount() {
    this._inputWidth = parseInt(window.getComputedStyle(this._input).width, 10)
    this._extendedInputWidth = parseInt(window.getComputedStyle(this._extendedInput).width, 10)
  }

  render() {
    const {
      buttonText, placeholder,
      onRequestSend, // eslint-disable-line no-unused-vars
      ...others
    } = this.props
    let className = 'z-field-button__input'
    if (this.state.mode === 'field') {
      className += ' z-field-button__input--focus'
    }
    const width = this.state.mode === 'field' ? this._extendedInputWidth + 100 : this._inputWidth
    const style = {width}
    const self = this
    return (
      <div className="z-field-button">
        <input
          ref={function (c) {
            self._extendedInput = c
          }}
          size={placeholder.length}
          style={{visibility: 'hidden', position: 'absolute'}}
          />
        <input
          ref={function (c) {
            self._input = c
          }}
          size={buttonText.length}
          className={className}
          placeholder={this.state.focus ? placeholder : buttonText}
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
