import React, {memo, useCallback} from 'react';
import {ImageSourcePropType} from 'react-native';
import {ImageBackground, StyledInput, Row, Icon} from './Shout.styles';
import {defaultShout} from '../../assets';
import {isIos} from '../../utils';

type Props = {
  image: ImageSourcePropType;
  value: string;
  editable?: boolean;
  type?: 'default' | 'left' | 'right';
  onChange: (value: string) => void;
};

export const Shout = memo(
  ({value, editable = true, image = defaultShout, onChange}: Props) => {
    const handleChange = useCallback((value: string) => {
      return onChange(value);
    }, []);

    return (
      <ImageBackground source={image} resizeMode="contain">
        <Row>
          <Icon />
          <StyledInput
            keyboardType={isIos ? 'default' : 'visible-password'}
            secureTextEntry={!isIos}
            onChangeText={handleChange}
            autoCapitalize={'characters'}
            value={value}
            numberOfLines={4}
            editable={editable}
            multiline
          />
        </Row>
      </ImageBackground>
    );
  },
);
