import React, {memo} from 'react';
import {View, Text} from 'react-native';

type Props = {};

export const ShoutScreen = memo((props: Props) => {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Hello world!</Text>
    </View>
  );
});
