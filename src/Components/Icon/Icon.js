import React from 'react';
import PropTypes from 'prop-types';
import IcomoonReact from '../IcomoonReact';
import iconSet from '../../assets/icons/selection.json';

const Icon = (props) => {
  const { color, size, icon } = props;
  return <IcomoonReact iconSet={iconSet} color={color || '#f00'} size={size || 100} icon={icon} />;
};

Icon.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Icon;
