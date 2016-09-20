'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

if (typeof window !== 'undefined') require('./index.css');

exports.default = function (props) {
  var text = props.text;
  var color = props.color;
  var width = props.width;

  var others = _objectWithoutProperties(props, ['text', 'color', 'width']);

  var className = 'z-button';
  if (color == 'gray') className += ' z-button--gray';
  return _react2.default.createElement(
    'button',
    _extends({ style: { width: width }, className: className }, others),
    text
  );
};