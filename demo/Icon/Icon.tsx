import React from "react";
import IcomoonReact from "../../src/IcomoonReact";
import iconSet from "../assets/icons/selection.json";

const Icon: React.FC<{
  color?: string;
  size?: string | number;
  icon: string;
  className?: string;
}> = props => {
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
