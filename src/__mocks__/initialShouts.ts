import uuid from 'react-native-uuid';

export const INITIAL_SHOUTS = [
  {
    id: uuid.v4(),
    image: 'frame',
    text: 'Hello',
  },
  {
    id: uuid.v4(),
    image: 'sport',
    text: 'Play football',
  },
];
