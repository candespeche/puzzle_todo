import styled from 'styled-components';
import {colors, fontSizes} from '../constants';

export const TitleContainer = styled.View`
  padding: 25px 0;
`;

export const Text = styled.Text`
  font.size: ${fontSizes.MEDIUM};
  color: ${colors.BLACK};
  letter-spacing: 0.5px;
  font-weight: bold;
`;
