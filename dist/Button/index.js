'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

if (typeof window !== 'undefined') {
  require('./index.css');
}

var Button = function Button(props) {
  var text = props.text;
  var color = props.color;
  var width = props.width;
  var style = props.style;

  var others = _objectWithoutProperties(props, ['text', 'color', 'width', 'style']);

  var className = 'z-button';
  if (color === 'gray') {
    className += ' z-button--gray';
  }
  style.width = width;
  return _react2.default.createElement(
    'button',
    _extends({ style: style, className: className }, others),
    text
  );
};

Button.defaultProps = {
  style: {}
};

Button.propTypes = {
  text: _react.PropTypes.string,
  color: _react.PropTypes.oneOf(['gray']),
  width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  style: _react.PropTypes.object
};

exports.default = Button;