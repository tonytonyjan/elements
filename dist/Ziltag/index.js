'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') require('./index.css');

module.exports = function (props) {
  return _react2.default.createElement('div', { className: 'z-ziltag', style: props.style });
};