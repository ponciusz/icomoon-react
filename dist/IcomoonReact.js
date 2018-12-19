'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconList = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconList = exports.iconList = function iconList(iconSet) {
  var list = [];
  iconSet.icons.forEach(function (icon) {
    list.push(icon.properties.name.split(', ')[0]);
  });
  return list;
};

function getSvg(icon, iconSet, styles, size, className) {
  var currentIcon = iconSet.icons.find(function (iconEl) {
    return iconEl.properties.name.split(', ').includes(icon);
  });

  if (currentIcon) {
    return _react2.default.createElement(
      'svg',
      {
        className: className,
        style: styles.svg,
        width: size,
        height: size,
        viewBox: '0 0 ' + (currentIcon.icon.width || '1024') + ' 1024',
        xmlns: 'http://www.w3.org/2000/svg'
      },
      _react2.default.createElement('path', { style: styles.path, d: currentIcon.icon.paths.join(' ') })
    );
  }
  console.warn('icon ' + icon + ' does not exist.');
  return '';
}

var Icon = function Icon(props) {
  var color = props.color,
      size = props.size,
      icon = props.icon,
      iconSet = props.iconSet,
      className = props.className;


  var styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    path: {
      fill: color
    }
  };

  return getSvg(icon, iconSet, styles, size, className);
};

Icon.propTypes = {
  className: _propTypes2.default.string,
  iconSet: _propTypes2.default.shape({}).isRequired,
  color: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
};

Icon.defaultProps = {
  className: ''
};

exports.default = Icon;