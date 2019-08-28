import React from "react";

import IcomoonReact from "../IcomoonReact";
import iconSet from "../../assets/icons/selection.json";
import { IcomoonReactProps } from "interfaces";

const Icon: React.FC<IcomoonReactProps> = props => {
  const { color, size = "100%", icon, className = "" } = props;
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  );
};

export default Icon;
