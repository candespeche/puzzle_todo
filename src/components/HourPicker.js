import React from 'react';
import PropTypes from 'prop-types';
import { FormLabel, Text } from '../styles/hourPicker';
import { colors } from '../constants';
import { Icon } from 'react-native-elements';

function HourPicker({ children }) {

  return (
    <FormLabel>
      <Text>{children}</Text>
      <Icon name="clock" type="feather" color={colors.GREY} size={14} />
    </FormLabel>
  );
}

HourPicker.propTypes = {
  children: PropTypes.string,
};

HourPicker.defaultProps = {
  children: '',
};

export default HourPicker;
