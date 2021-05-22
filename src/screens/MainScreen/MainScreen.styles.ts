import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Container = styled.View`
  flex: 1;
`;

export const Map = styled(MapView)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
