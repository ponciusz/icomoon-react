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
  const currentIcon = iconSet.icons.find(iconEl => iconEl.properties.name.split(', ').includes(icon));

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
        <path style={styles.path} d={currentIcon.icon.paths.join(' ')} />
      </svg>
    );
  }
  console.warn(`icon ${icon} does not exist.`);
  return '';
}

const Icon = (props) => {
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

Icon.propTypes = {
  className: PropTypes.string,
  iconSet: PropTypes.shape({}).isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
