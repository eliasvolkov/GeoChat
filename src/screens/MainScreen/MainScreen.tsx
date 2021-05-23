import React, {useCallback, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {useMst} from '../../stores/RootStore';
import {Container, Map, StyledPoints, StyledButton} from './MainScreen.styles';
import {shoutButton} from '../../assets';
import {openSettings} from 'react-native-permissions';
import {SCREENS} from '../../constants/screens';
import {useNavigation} from '@react-navigation/native';
import {AppState} from 'react-native';

export const MainScreen = observer(() => {
  const {shoutsStore} = useMst();
  const navigation = useNavigation();

  useEffect(() => {
    shoutsStore.fetchShouts();
    shoutsStore.setLocation();
  }, []);

  useEffect(() => {
    AppState.addEventListener('change', shoutsStore.setLocation);
    return () => {
      AppState.removeEventListener('change', shoutsStore.setLocation);
    };
  }, []);

  const onPress = useCallback(async () => {
    if (!shoutsStore.hasLocationPermissions) {
      await openSettings();
      return;
    }
    navigation.navigate(SCREENS.SHOUT_CREATE);
  }, [shoutsStore.hasLocationPermissions]);
  return (
    <Container>
      <Map
        initialRegion={{
          ...shoutsStore.coordinates,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <StyledPoints points={shoutsStore.points} />
      <StyledButton onPress={onPress} image={shoutButton} />
    </Container>
  );
});
