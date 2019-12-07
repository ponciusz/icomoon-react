"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var IcomoonReact_1 = __importDefault(require("../IcomoonReact"));
var selection_json_1 = __importDefault(require("../../assets/icons/selection.json"));
var Icon = function (props) {
    var color = props.color, _a = props.size, size = _a === void 0 ? "100%" : _a, icon = props.icon, _b = props.className, className = _b === void 0 ? "" : _b;
    return (react_1.default.createElement(IcomoonReact_1.default, { className: className, iconSet: selection_json_1.default, color: color, size: size, icon: icon }));
};
exports.default = Icon;
//# sourceMappingURL=Icon.js.map