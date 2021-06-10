import uuid from 'react-native-uuid';

export const INITIAL_SHOUTS = [
  {
    id: uuid.v4(),
    image: 'frame',
    text: 'Hello',
    longitude: -122.406417,
    latitude: 37.785834,
  },
  {
    id: uuid.v4(),
    image: 'sport',
    text: 'Play football',
    longitude: -122.406417,
    latitude: 37.785834,
  },
];
