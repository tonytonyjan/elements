'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') require('./index.css');

module.exports = function () {
  return _react2.default.createElement(
    'div',
    { className: 'z-spinner' },
    _react2.default.createElement(
      'div',
      { className: 'z-spinner__continaer' },
      _react2.default.createElement('div', { className: 'z-spinner__logo' }),
      _react2.default.createElement('div', { className: 'z-spinner__circle' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'z-spinner__text' },
      'loading'
    )
  );
};