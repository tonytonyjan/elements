'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _close = require('react-icons/lib/md/close');

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') {
  require('./index.css');
}

var Model = function Model(props) {
  var isOpen = props.isOpen;
  var onRequestClose = props.onRequestClose;
  var isCenterMode = props.isCenterMode;
  var children = props.children;

  var className = 'z-modal';
  if (isCenterMode) {
    className += ' z-modal--center';
  }
  return isOpen && _react2.default.createElement(
    'div',
    { className: className, onClick: onRequestClose },
    _react2.default.createElement(
      'div',
      { className: 'z-modal__body', onClick: stopPropagation },
      children,
      _react2.default.createElement(_close2.default, { className: 'z-modal__close', size: 40, onClick: onRequestClose })
    )
  );
};

Model.propTypes = {
  isCenterMode: _react.PropTypes.bool,
  isOpen: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  onRequestClose: _react.PropTypes.func
};

Model.defaultProps = {
  isCenterMode: false,
  isOpen: false
};

function stopPropagation(e) {
  e.stopPropagation();
}

exports.default = Model;