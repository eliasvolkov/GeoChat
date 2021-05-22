import React from 'react';
import {observer} from 'mobx-react-lite';
import {useMst} from '../../stores/RootStore';
import {Container, Map} from './MainScreen.styles';

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
    </Container>
  );
});
