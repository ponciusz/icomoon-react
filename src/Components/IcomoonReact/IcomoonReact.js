import React from 'react';
import PropTypes from 'prop-types';

export const iconList = (iconSet) => {
  const list = [];
  iconSet.icons.forEach((icon) => {
    list.push(icon.properties.name.split(', ')[0]);
  });
  return list;
};

function getSvg(icon, iconSet, styles, size, className) {
  const find = iconEl => iconEl.properties.name.split(', ').includes(icon);
  const currentIcon = iconSet.icons.find(find);
  const renderPath = iconObj => (path, index) => {
    const attrs = (iconObj.attrs && iconObj.attrs[index]) || {};
    return (
      <path
        style={styles.path}
        key={index}
        d={path}
        {...attrs}
      />
    );
  };

  if (currentIcon) {
    return (
      <svg
        className={className}
        style={styles.svg}
        width={size}
        height={size}
        viewBox={`0 0 ${currentIcon.icon.width || '1024'} 1024`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {currentIcon.icon.paths.map(renderPath(currentIcon.icon))}
      </svg>
    );
  }
  console.warn(`icon ${icon} does not exist.`);
  return null;
}

const IcomoonReact = (props) => {
  const {
    color, size, icon, iconSet, className,
  } = props;

  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: color,
    },
  };

  return (
    getSvg(icon, iconSet, styles, size, className)
  );
};

IcomoonReact.propTypes = {
  className: PropTypes.string,
  iconSet: PropTypes.shape({}).isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

IcomoonReact.defaultProps = {
  className: '',
};

export default IcomoonReact;
