"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
var selection_json_1 = __importDefault(require("../../assets/icons/selection.json"));
var styles = {
    borderCollapse: "collapse",
    border: "1px solid black",
    padding: "10px"
};
var App = function () { return (react_1.default.createElement("div", null,
    react_1.default.createElement("table", { style: styles },
        react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", null,
                react_1.default.createElement("th", { style: styles, colSpan: 2 }, "Icon List"))),
        react_1.default.createElement("tbody", null, index_1.iconList(selection_json_1.default).map(function (icon) { return (react_1.default.createElement("tr", { key: icon },
            react_1.default.createElement("td", { style: styles },
                react_1.default.createElement(index_1.Icon, { className: "example-optional-class", size: 30, icon: icon })),
            react_1.default.createElement("td", { style: styles }, icon))); }))))); };
exports.default = App;
//# sourceMappingURL=App.js.map