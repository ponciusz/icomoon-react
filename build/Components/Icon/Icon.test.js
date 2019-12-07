"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enzyme_1 = __importDefault(require("enzyme"));
var enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var index_1 = require("../index");
enzyme_1.default.configure({ adapter: new enzyme_adapter_react_16_1.default() });
describe("IcomoonReact component", function () {
    it("should be defined", function () {
        expect(index_1.Icon).toBeDefined();
    });
});
it("not existion icon not crashing ", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(index_1.Icon, { className: "example-optional-class", size: 30, icon: "random" }), div);
    react_dom_1.default.unmountComponentAtNode(div);
});
//# sourceMappingURL=Icon.test.js.map