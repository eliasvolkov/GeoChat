import styled from 'styled-components/native';
import {COLORS} from '../../../../constants/colors';

export const Circle = styled.ImageBackground`
  border-color: rgba(161, 162, 164, 0.5);
  border-width: 2px;
  width: 54px;
  height: 55px;
  border-radius: 300px;

  align-items: center;
  justify-content: center;
`;

export const PointsValue = styled.Text`
  color: ${COLORS.white};
  font-size: 28px;
  font-weight: bold;
`;
