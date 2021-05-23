import React, {memo} from 'react';
import {TouchableOpacity, ImageSourcePropType, ViewProps} from 'react-native';
import {StyledImage} from './Button.styles';

type Props = {
  image: ImageSourcePropType;
  onPress: () => void;
  style?: ViewProps;
};

export const Button = memo(({image, onPress, style}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <StyledImage source={image} />
    </TouchableOpacity>
  );
});
