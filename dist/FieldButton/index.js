'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _send2 = require('react-icons/lib/md/send');

var _send3 = _interopRequireDefault(_send2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof window !== 'undefined') {
  require('./index.css');
}

var FieldButton = function (_React$Component) {
  _inherits(FieldButton, _React$Component);

  function FieldButton(props) {
    _classCallCheck(this, FieldButton);

    var _this = _possibleConstructorReturn(this, (FieldButton.__proto__ || Object.getPrototypeOf(FieldButton)).call(this, props));

    _this.state = { mode: 'button' };
    _this.handleFocus = _this._handleFocus.bind(_this);
    _this.handleBlur = _this._handleBlur.bind(_this);
    _this.handleKeyPress = _this._handleKeyPress.bind(_this);
    _this.handleMouseDown = _this._send.bind(_this);
    return _this;
  }

  _createClass(FieldButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var buttonText = _props.buttonText;
      var placeholder = _props.placeholder;
      var defaultWidth = _props.defaultWidth;
      var extendedWidth = _props.extendedWidth;
      var onRequestSend = _props.onRequestSend;

      var others = _objectWithoutProperties(_props, ['buttonText', 'placeholder', 'defaultWidth', 'extendedWidth', 'onRequestSend']);

      var className = 'z-field-button__input';
      if (this.state.mode === 'field') {
        className += ' z-field-button__input--focus';
      }
      var width = this.state.mode === 'field' ? extendedWidth : defaultWidth;
      var style = { width: width };
      var self = this;
      return _react2.default.createElement(
        'div',
        { className: 'z-field-button' },
        _react2.default.createElement('input', _extends({
          ref: function ref(c) {
            self._input = c;
          },
          size: buttonText.length,
          className: className,
          placeholder: this.state.mode === 'field' ? placeholder : buttonText,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onKeyPress: this.handleKeyPress,
          style: style,
          required: true
        }, others)),
        _react2.default.createElement(_send3.default, { className: 'z-field-button__send', onMouseDown: this.handleMouseDown })
      );
    }
  }, {
    key: '_handleFocus',
    value: function _handleFocus() {
      this.setState({ mode: 'field' });
    }
  }, {
    key: '_handleBlur',
    value: function _handleBlur() {
      var mode = this._input.value.length > 0 ? 'field' : 'button';
      this.setState({ mode: mode });
    }
  }, {
    key: '_handleKeyPress',
    value: function _handleKeyPress(e) {
      if (e.key === 'Enter') {
        this._send();
      }
    }
  }, {
    key: '_send',
    value: function _send() {
      this.props.onRequestSend(this._input.value);
    }
  }]);

  return FieldButton;
}(_react2.default.Component);

FieldButton.propTypes = {
  buttonText: _react.PropTypes.string.isRequired,
  placeholder: _react.PropTypes.string.isRequired,
  defaultWidth: _react.PropTypes.number.isRequired,
  extendedWidth: _react.PropTypes.number.isRequired,
  onRequestSend: _react.PropTypes.func
};
FieldButton.defaultProps = {
  defaultWidth: 210,
  extendedWidth: 350
};
exports.default = FieldButton;