import React, {memo, useCallback} from 'react';
import {ImageSourcePropType} from 'react-native';
import {ImageBackground, StyledInput, Row, Icon} from './Shout.styles';
import {defaultShout} from '../../assets';

type Props = {
  image: ImageSourcePropType;
  value: string;
  editable?: boolean;
  type?: 'default' | 'left' | 'right';
  onChange: (value: string) => void;
};

export const Shout = memo(
  ({
    value = 'Hello my dear friend',
    editable = true,
    image = defaultShout,
    onChange,
  }: Props) => {
    console.log('rerender');
    const handleChange = useCallback((value: string) => {
      return onChange(value);
    }, []);
    return (
      <ImageBackground source={image} resizeMode="contain">
        <Row>
          <Icon />
          <StyledInput
            onChangeText={handleChange}
            value={value.toUpperCase()}
            editable={editable}
            multiline
          />
        </Row>
      </ImageBackground>
    );
  },
);
