import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

export default function Screens({ onPress, children }) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}

Screens.defaultProps = {
  children: null,
  onPress: () => {},
};

Screens.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};