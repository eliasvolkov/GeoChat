import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigator} from './navigators/AppNavigator';
import {COLORS} from './constants/colors';
import {Theme} from './constants/theme';

import {Provider, rootStore} from './stores/RootStore';
import {connectReduxDevtools} from 'mst-middlewares';
import {isIos} from './utils';

if (isIos && __DEV__) {
  connectReduxDevtools(require('remotedev'), rootStore);
}

export const App = () => {
  return (
    <Provider value={rootStore}>
      <NavigationContainer theme={Theme}>
        <SafeAreaProvider>
          <StatusBar
            translucent
            backgroundColor={COLORS.transparent}
            barStyle="light-content"
          />
          <AppNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};
