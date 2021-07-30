import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Text} from '../styles/form';

function Subtitle({children}) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

Subtitle.propTypes = {
  children: PropTypes.string,
};

Subtitle.defaultProps = {
  children: '',
};

export default Subtitle;
