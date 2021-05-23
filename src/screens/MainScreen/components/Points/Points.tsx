import React, {memo} from 'react';
import {Circle, PointsValue} from './Points.styles';
import {ViewStyle} from 'react-native';
import {pointCircle} from '../../../../assets';

type Props = {
  points: number;
  style?: ViewStyle;
};

export const Points = memo(({points, style}: Props) => {
  return (
    <Circle style={style} source={pointCircle}>
      <PointsValue>{points}</PointsValue>
    </Circle>
  );
});
