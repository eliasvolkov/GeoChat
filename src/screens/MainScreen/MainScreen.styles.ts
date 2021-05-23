import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import {Points} from './components/Points/Points';
import {Button} from '../../components/Button/Button';

export const Container = styled.View`
  flex: 1;
  padding-bottom: 20px;
`;

export const Map = styled(MapView)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const StyledPoints = styled(Points)`
  position: absolute;
  top: 50px;
  right: 20px;
`;

export const StyledButton = styled(Button)`
  margin-top: auto;
  align-self: center;
`;
