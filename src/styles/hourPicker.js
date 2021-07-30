import styled from 'styled-components';
import { colors } from '../constants';

export const FormLabel = styled.View`
  width: 100%;
  height: 45px;
  background-color: ${colors.LIGHT_GREY};
  border-radius: 8px;
  color: ${colors.BLACK};
  padding-horizontal: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${colors.BLACK};
`;
