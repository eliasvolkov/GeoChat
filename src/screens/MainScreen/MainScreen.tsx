import React from 'react';
import {observer} from 'mobx-react-lite';
import {useMst} from '../../stores/RootStore';
import {Container, Map, StyledPoints, StyledButton} from './MainScreen.styles';
import {shoutButton} from '../../assets';

export const MainScreen = observer(() => {
  const {shoutsStore} = useMst();
  return (
    <Container>
      <Map
        initialRegion={{
          ...shoutsStore.coordinates,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <StyledPoints points={15} />
      <StyledButton onPress={() => {}} image={shoutButton} />
    </Container>
  );
});
