import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {SCREENS} from '../constants/screens';
import {MainScreen} from '../screens/MainScreen/MainScreen';
import {ShoutCreationScreen} from '../screens/ShoutCreationScreen/ShoutCreationScreen';
import {TestScreen} from '../screens/ShoutScreen';

export type AppNavigatorParams = {
  [SCREENS.MAIN]: undefined;
  [SCREENS.SHOUT_CREATE]: undefined;
  [SCREENS.SHOUT_COMMENT]: undefined;
};

export const AppNavigator = () => {
  const Stack = createStackNavigator<AppNavigatorParams>();
  return (
    <Stack.Navigator initialRouteName={SCREENS.MAIN} headerMode="none">
      <Stack.Screen name={SCREENS.MAIN} component={MainScreen} />
      <Stack.Screen
        name={SCREENS.SHOUT_COMMENT}
        component={TestScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={SCREENS.SHOUT_CREATE}
        component={ShoutCreationScreen}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
    </Stack.Navigator>
  );
};
