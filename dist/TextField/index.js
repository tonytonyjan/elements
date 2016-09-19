'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('react-icons/lib/md/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

if (typeof window !== 'undefined') require('./index.css');

module.exports = function (props) {
  var error = props.error;
  var width = props.width;

  var others = _objectWithoutProperties(props, ['error', 'width']);

  var inputStyle = {
    width: width || 150,
    borderBottomColor: error && '#F44336'
  };
  return _react2.default.createElement(
    'div',
    { className: 'z-text-field', style: { width: width } },
    _react2.default.createElement('input', _extends({ type: 'text', className: 'z-text-field__input', style: inputStyle }, others)),
    error && _react2.default.createElement(
      'div',
      { className: 'z-text-field__error' },
      _react2.default.createElement(
        'div',
        { className: 'z-text-field__error-text' },
        error
      ),
      _react2.default.createElement(_warning2.default, { className: 'z-text-field__error-icon' })
    )
  );
};