"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var index_1 = require("../index");
it("renders without crashing", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(index_1.App, null), div);
    react_dom_1.default.unmountComponentAtNode(div);
});
//# sourceMappingURL=App.test.js.map