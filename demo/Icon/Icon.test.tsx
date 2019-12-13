import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import ReactDOM from "react-dom";
import Icon from "./index";

Enzyme.configure({ adapter: new Adapter() });

describe("IcomoonReact component", () => {
  it("should be defined", () => {
    expect(Icon).toBeDefined();
  });
});

it("rendering star icon", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Icon icon="star" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("not existion icon not crashing ", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Icon className="example-optional-class" size={30} icon="random" />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
