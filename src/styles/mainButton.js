import styled from 'styled-components';
import {colors, fontSizes} from '../constants';

export const GreenButton = styled.TouchableOpacity`
  background-color: ${colors.GREEN};
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px 0;
  border-radius: 15px;
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

export const Text = styled.Text`
  color: ${colors.WHITE};
  font-size: ${fontSizes.SMALL};
`;
