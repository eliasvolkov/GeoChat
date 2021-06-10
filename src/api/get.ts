import {INITIAL_SHOUTS} from '../__mocks__/initialShouts';

export const getInitialShouts = ({
  longitude,
  latitude,
}: {
  longitude: number;
  latitude: number;
}) => {
  // This is a simple example of filtering logic.
  // Truly it's gonna be more complex and on the server side
  return INITIAL_SHOUTS.filter(
    item => item.latitude === latitude && item.longitude === longitude,
  );
};
