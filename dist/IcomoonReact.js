"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.iconList = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var iconList = function iconList(iconSet) {
  var list = [];
  iconSet.icons.forEach(function (icon) {
    list.push(icon.properties.name.split(', ')[0]);
  });
  return list;
};

exports.iconList = iconList;

function getSvg(icon, iconSet, styles, size, className) {
  var find = function find(iconEl) {
    return iconEl.properties.name.split(', ').includes(icon);
  };

  var currentIcon = iconSet.icons.find(find);

  var renderPath = function renderPath(iconObj) {
    return function (path, index) {
      var attrs = iconObj.attrs && iconObj.attrs[index] || {};
      return _react.default.createElement("path", _extends({
        style: styles.path,
        key: index,
        d: path
      }, attrs));
    };
  };

  if (currentIcon) {
    return _react.default.createElement("svg", {
      className: className,
      style: styles.svg,
      width: size,
      height: size,
      viewBox: "0 0 ".concat(currentIcon.icon.width || '1024', " 1024"),
      xmlns: "http://www.w3.org/2000/svg"
    }, currentIcon.icon.paths.map(renderPath(currentIcon.icon)));
  }

  console.warn("icon ".concat(icon, " does not exist."));
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
  className: _propTypes.default.string,
  iconSet: _propTypes.default.shape({}).isRequired,
  color: _propTypes.default.string.isRequired,
  icon: _propTypes.default.string.isRequired,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
};
Icon.defaultProps = {
  className: ''
};
var _default = Icon;
exports.default = _default;