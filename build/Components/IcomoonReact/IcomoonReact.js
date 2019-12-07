"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.iconList = function (iconSet) {
    var list = [];
    iconSet.icons.forEach(function (icon) {
        list.push(icon.properties.name.split(", ")[0]);
    });
    return list;
};
function getSvg(icon, iconSet, styles, size, className) {
    var find = function (iconEl) { return iconEl.properties.name.split(", ").includes(icon); };
    var currentIcon = iconSet.icons.find(find);
    var renderPath = function (iconObj) { return function (path, index) {
        var attrs = (iconObj.attrs && iconObj.attrs[index]) || {};
        return react_1.default.createElement("path", __assign({ style: styles.path, key: index, d: path }, attrs));
    }; };
    if (currentIcon) {
        return (react_1.default.createElement("svg", { className: className, style: styles.svg, width: size, height: size, viewBox: "0 0 " + (currentIcon.icon.width || "1024") + " 1024", xmlns: "http://www.w3.org/2000/svg" }, currentIcon.icon.paths.map(renderPath(currentIcon.icon))));
    }
    console.warn("icon " + icon + " does not exist.");
    return null;
}
var IcomoonReact = function (props) {
    var color = props.color, size = props.size, icon = props.icon, iconSet = props.iconSet, _a = props.className, className = _a === void 0 ? "" : _a;
    var styles = {
        svg: {
            display: "inline-block",
            verticalAlign: "middle"
        },
        path: {
            fill: color
        }
    };
    return getSvg(icon, iconSet, styles, size, className);
};
exports.default = IcomoonReact;
//# sourceMappingURL=IcomoonReact.js.map