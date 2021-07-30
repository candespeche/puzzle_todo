import React from 'react';
import PropTypes from 'prop-types';
import {TitleContainer, Text} from '../styles/title';

function Title({children}) {
  return (
    <TitleContainer>
      <Text>{children}</Text>
    </TitleContainer>
  );
}

Title.propTypes = {
  children: PropTypes.string,
};

Title.defaultProps = {
  children: '',
};

export default Title;
