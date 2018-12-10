import React from 'react';
import PropTypes from 'prop-types';

export const iconList = (iconSet) => {
  const list = [];
  iconSet.icons.forEach((icon) => {
    list.push(icon.properties.name.split(', ')[0]);
  });
  return list;
};

function getSvg(icon, iconSet, styles, size) {
  const currentIcon = iconSet.icons.find(iconEl => iconEl.properties.name.split(', ').includes(icon));

  if (currentIcon) {
    return (
      <svg style={styles.svg} width={size} height={size} viewBox={`0 0 ${currentIcon.icon.width} 1024`}>
        <path style={styles.path} d={currentIcon.icon.paths.join(' ')} />
      </svg>
    );
  }
  console.warn(`icon ${icon} does not exist.`);
  return null;
}

const Icon = (props) => {
  const {
    color, size, icon, iconSet,
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
    getSvg(icon, iconSet, styles, size)

  );
};

Icon.propTypes = {
  iconSet: PropTypes.shape({}).isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Icon;
