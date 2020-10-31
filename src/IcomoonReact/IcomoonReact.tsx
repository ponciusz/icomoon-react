import React from "react";

export const iconList = iconSet => {
  const list: Array<string> = [];
  iconSet.icons.forEach(icon => {
    list.push(icon.properties.name.split(", ")[0]);
  });
  return list;
};

function getSvg(icon, iconSet, styles, size, className, rest) {
  const find = iconEl => iconEl.properties.name.split(", ").includes(icon);
  const currentIcon = iconSet.icons.find(find);
  const renderPath = iconObj => (path, index) => {
    const attrs = (iconObj.attrs && iconObj.attrs[index]) || {};
    return <path style={styles.path} key={index} d={path} {...attrs} />;
  };

  if (currentIcon) {
    return (
      <svg
        className={className}
        style={styles.svg}
        width={size}
        height={size}
        viewBox={`0 0 ${currentIcon.icon.width || "1024"} 1024`}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        {currentIcon.icon.paths.map(renderPath(currentIcon.icon))}
      </svg>
    );
  }
  console.warn(`icon ${icon} does not exist.`);
  return null;
}

export const IcomoonReact: React.FC<{
  color?: string;
  size?: string | number;
  icon: string;
  iconSet: Object;
  className?: string;
  style?: React.CSSProperties;
  [x: string]: any;
}> = props => {
  const {
    color,
    size = "100%",
    icon,
    iconSet,
    className = "",
    style = {},
    ...rest
  } = props;

  const styles = {
    svg: {
      display: "inline-block",
      verticalAlign: "middle",
      ...style
    },
    path: {
      fill: color
    }
  };

  return getSvg(icon, iconSet, styles, size, className, rest);
};

IcomoonReact.displayName = `IcomoonReact`;

export default IcomoonReact;
