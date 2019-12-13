import React from "react";
import { iconList } from "../../src/IcomoonReact";
import Icon from "../Icon";
import iconSet from "../assets/icons/selection.json";

const styles: React.CSSProperties = {
  borderCollapse: "collapse",
  border: "1px solid black",
  padding: "10px"
};

const App = () => (
  <div>
    <table style={styles}>
      <thead>
        <tr>
          <th style={styles} colSpan={2}>
            Icon List
          </th>
        </tr>
      </thead>
      <tbody>
        {iconList(iconSet).map(icon => (
          <tr key={icon}>
            <td style={styles}>
              <Icon className="example-optional-class" size={30} icon={icon} />
            </td>
            <td style={styles}>{icon}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default App;
