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
    list.push(icon.properties.name);
  });
  return list;
};

function getPath(iconPaths, iconName) {
  var icon = iconPaths.icons.find(function (iconEl) {
    return iconEl.properties.name === iconName;
  });

  if (icon) {
    return icon.icon.paths.join(' ');
  }
  console.warn('icon ' + iconName + ' does not exist.');
  return '';
}

var Icon = function Icon(props) {
  var color = props.color,
      size = props.size,
      icon = props.icon,
      iconSet = props.iconSet;


  var styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    path: {
      fill: color
    }
  };

  return _react2.default.createElement(
    'svg',
    { style: styles.svg, width: size, height: size, viewBox: '0 0 1024 1024' },
    _react2.default.createElement('path', { style: styles.path, d: getPath(iconSet, icon) })
  );
};

Icon.propTypes = {
  iconSet: _propTypes2.default.shape({}).isRequired,
  color: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.number.isRequired
};

exports.default = Icon;