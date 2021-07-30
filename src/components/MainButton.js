import React from 'react';
import PropTypes from 'prop-types';
import { GreenButton, Text } from '../styles/mainButton';

function MainButton({ children, onPress }) {

  return (
    <GreenButton onPress={onPress}>
      <Text>{children}</Text>
    </GreenButton>
  );
}

MainButton.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func,
};

MainButton.defaultProps = {
  children: '',
  onPress: () => {},
};

export default MainButton;
