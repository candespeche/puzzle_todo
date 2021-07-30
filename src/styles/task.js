import styled from 'styled-components';
import {colors, fontSizes} from '../constants';

export const TaskContainer = styled.View`
  padding: 20px 0;
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Checkbox = styled.View`
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  border-radius: 5px;
`;

export const Text = styled.Text`
  color: ${colors.BLACK};
  font-size: ${fontSizes.SMALL};
  margin-left: 15px;
`;
