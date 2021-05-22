import {Instance, types} from 'mobx-state-tree';
import Geolocation from '@react-native-community/geolocation';

const Shout = types.model('ShoutModel', {
  id: types.identifier,
  image: types.string,
  text: types.string,
});

const Coordinates = types.model('CoordinatesModel', {
  longitude: types.number,
  latitude: types.number,
});
type Coordinates = Instance<typeof Coordinates>;

const INITIAL_POINTS = 15;
const INITIAL_COORDINATES = {
  longitude: -122.406417,
  latitude: 37.785834,
};

export const ShoutsStore = types
  .model({
    points: INITIAL_POINTS,
    shouts: types.array(types.optional(types.array(Shout), [])),
    coordinates: types.optional(Coordinates, INITIAL_COORDINATES),
  })
  .actions(self => ({
    afterCreate() {
      Geolocation.getCurrentPosition(({coords}) => {
        this.setCoordinates({
          longitude: coords.longitude,
          latitude: coords.latitude,
        });
      });
    },

    setCoordinates(coordinates: Coordinates) {
      self.coordinates = coordinates;
    },
  }));
