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
  var mode = props.mode;
  var children = props.children;
  var showClose = props.showClose;
  var padding = props.padding;

  var className = 'z-modal';
  if (mode === 'center') {
    className += ' z-modal--center';
  }
  var bodyClass = 'z-modal__body';
  if (padding == 'small') {
    bodyClass += ' z-modal__body--small';
  }
  return isOpen && _react2.default.createElement(
    'div',
    { className: className, onClick: onRequestClose },
    _react2.default.createElement(
      'div',
      { className: bodyClass, onClick: stopPropagation },
      children,
      showClose && _react2.default.createElement(_close2.default, { className: 'z-modal__close', size: 40, onClick: onRequestClose })
    )
  );
};

Model.propTypes = {
  mode: _react2.default.PropTypes.oneOf(['normal', 'center']),
  isOpen: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  onRequestClose: _react.PropTypes.func
};

Model.defaultProps = {
  mode: 'normal',
  isOpen: false,
  showClose: true
};

function stopPropagation(e) {
  e.stopPropagation();
}

exports.default = Model;