import {cast, flow, types} from 'mobx-state-tree';
import Geolocation from '@react-native-community/geolocation';
import {PermissionsService} from '../services/PermissionsService';
import {CoordinatesType} from '../types';
import {getInitialShouts} from '../api/get';

const Shout = types.model('ShoutModel', {
  id: types.identifier,
  image: types.string,
  text: types.string,
});

const Coordinates = types
  .model('CoordinatesModel', {
    longitude: types.number,
    latitude: types.number,
  })
  .actions(self => ({
    setCoordinates({longitude, latitude}: CoordinatesType) {
      self.longitude = longitude;
      self.latitude = latitude;
    },
  }));

const INITIAL_POINTS = 15;
const INITIAL_COORDINATES = {
  longitude: -122.406417,
  latitude: 37.785834,
};

export const ShoutsStore = types
  .model({
    points: INITIAL_POINTS,
    hasLocationPermissions: false,
    shouts: types.optional(types.array(Shout), []),
    coordinates: types.optional(Coordinates, INITIAL_COORDINATES),
  })
  .actions(self => ({
    setLocation: flow(function* () {
      const hasLocationPermissions =
        yield PermissionsService.requestLocationPermissions();
      self.hasLocationPermissions = hasLocationPermissions;
      if (hasLocationPermissions) {
        Geolocation.getCurrentPosition(({coords}) => {
          const coordinates = {
            longitude: coords.longitude,
            latitude: coords.latitude,
          };
          self.coordinates.setCoordinates(coordinates);
        });
      }
    }),

    fetchShouts: flow(function* () {
      try {
        const shouts = getInitialShouts();
        self.shouts = cast(shouts);
      } catch (error) {
        console.log(error);
      }
    }),
  }));
