import React from 'react';
import PropTypes from 'prop-types';

export const iconList = (iconSet) => {
  const list = [];
  iconSet.icons.forEach((icon) => {
    list.push(icon.properties.name);
  });
  return list;
};

function getPath(iconPaths, iconName) {
  const icon = iconPaths.icons.find(iconEl => iconEl.properties.name === iconName);

  if (icon) {
    return icon.icon.paths.join(' ');
  }
  console.warn(`icon ${iconName} does not exist.`);
  return '';
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
    <svg style={styles.svg} width={size} height={size} viewBox="0 0 1024 1024">
      <path style={styles.path} d={getPath(iconSet, icon)} />
    </svg>
  );
};

Icon.propTypes = {
  iconSet: PropTypes.shape({}).isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Icon;
