import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {SCREENS} from '../constants/screens';

type Props = {};

export const MainScreen = memo(({navigation}: Props) => {
  return (
    <View
      style={{
        backgroundColor: '#f5bdbd',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text onPress={() => navigation.navigate(SCREENS.SHOUT_CREATE)}>
        Hello world!
      </Text>
    </View>
  );
});
