import styled from 'styled-components/native';
import {COLORS} from '../../constants/colors';

export const ImageBackground = styled.ImageBackground`
  width: 320px;
  height: 140px;

  justify-content: center;
`;
export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.View`
  width: 45px;
  height: 45px;
  margin-right: 32px;
  background-color: ${COLORS.black};
`;

export const StyledInput = styled.TextInput`
  font-size: 18px;
  font-weight: bold;
  flex-wrap: wrap;
  width: 60%;
  text-align: center;
`;
