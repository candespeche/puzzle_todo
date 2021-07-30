import styled from 'styled-components';
import { colors, fontSizes } from '../constants';

export const Text = styled.Text`
  color: ${colors.BLACK};
  font-size: ${fontSizes.MEDIUM};
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 10px;
`;

export const FormInput = styled.TextInput`
  background-color: ${colors.LIGHT_GREY};
  color: ${colors.BLACK};
  border-radius: 8px;
  font-size: ${fontSizes.SMALL};
  padding: 10px 15px;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DatePickerInput = styled.View`
  background-color: ${colors.LIGHT_GREY};
`;

export const datePicker = {
  backgroundColor: colors.LIGHT_GREY,
  width: '100%',
  padding: 0,
  height: 45,
  borderRadius: 8,
  color: colors.BLACK,
};

export const DatePickerContainer = styled.View`
  flex-direction: column;
  width: 48%;
`;

export const formPicker = {
  viewContainer: {
    backgroundColor: colors.LIGHT_GREY,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    color: colors.BLACK,
    justifyContent: 'center',
  },
  inputIOS: {
    backgroundColor: colors.LIGHT_GREY,
    color: colors.BLACK,
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 40,
  },
};

export const formLabel = {
  width: '100%',
  height: 45,
  backgroundColor: colors.LIGHT_GREY,
  borderRadius: 8,
  color: colors.BLACK,
  paddingHorizontal: 15,
  justifyContent: 'center',
};
