'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') {
  require('./index.css');
}

var Ziltag = function Ziltag(props) {
  return _react2.default.createElement('div', { className: 'z-ziltag', style: props.style });
};

Ziltag.propTypes = {
  style: _react.PropTypes.object
};

exports.default = Ziltag;