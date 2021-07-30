import styled from 'styled-components';
import { colors } from '../constants';

export const IconsContainer = styled.View`
  width: 100px;
  justify-content: space-between;
  flex-direction: row;
  padding-right: 20px;
`;

export const IconContainer = styled.View`
  padding-left: 20px;
`;

export const Container = styled.View`
  flex: 1;
  position: relative;
  background-color: ${colors.WHITE};
  padding: 0 20px;
`;

export const ScrollView = styled.ScrollView`
  margin-bottom: 70px;
`;
