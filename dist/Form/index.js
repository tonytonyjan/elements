'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('../TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

if (typeof window !== 'undefined') {
  require('./index.css');
}

function Form(props) {
  var title = props.title;
  var fields = props.fields;
  var tip = props.tip;
  var button = props.button;
  var footer = props.footer;
  var error = props.error;

  var others = _objectWithoutProperties(props, ['title', 'fields', 'tip', 'button', 'footer', 'error']);

  return _react2.default.createElement(
    'form',
    _extends({ className: 'z-form' }, others),
    _react2.default.createElement(
      'div',
      { className: 'z-form__title' },
      title
    ),
    _react2.default.createElement(
      'div',
      { className: 'z-form__fields' },
      fields.map(function (field, idx) {
        return _react2.default.createElement(
          'div',
          { key: idx, className: 'z-form__field' },
          field
        );
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'z-form__tip' },
      tip
    ),
    _react2.default.createElement(
      'div',
      { className: 'z-form__button' },
      button
    ),
    error && _react2.default.createElement(
      'div',
      { className: 'z-form__error' },
      error
    ),
    _react2.default.createElement(
      'div',
      { className: 'z-form__footer' },
      footer
    )
  );
}

Form.propTypes = {
  fields: _react.PropTypes.arrayOf(_react.PropTypes.shape({ type: _react.PropTypes.oneOf([_TextField2.default]) })).isRequired,
  button: _react.PropTypes.shape({ type: _react.PropTypes.oneOf([_Button2.default]) }).isRequired,
  tip: _react.PropTypes.node,
  footer: _react.PropTypes.node,
  error: _react.PropTypes.node
};

exports.default = Form;