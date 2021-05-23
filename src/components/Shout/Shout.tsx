import React, {memo} from 'react';
import {ImageSourcePropType} from 'react-native';
import {ImageBackground, StyledInput, Row, Icon} from './Shout.styles';
import {defaultShout} from '../../assets';

type Props = {
  image: ImageSourcePropType;
  value: string;
  editable?: boolean;
  type: 'default' | 'left' | 'right';
};

export const Shout = memo(
  ({
    value = 'Hello my dear friend',
    editable = true,
    image = defaultShout,
  }: Props) => {
    return (
      <ImageBackground source={image} resizeMode="contain">
        <Row>
          <Icon />
          <StyledInput
            onChangeText={() => {}}
            value={value.toUpperCase()}
            editable={editable}
            multiline
          />
        </Row>
      </ImageBackground>
    );
  },
);
