import {DefaultTheme} from '@react-navigation/native';
import {COLORS} from './colors';

export const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.transparent,
    primary: COLORS.black,
  },
};
