import {cast, flow, Instance, types} from 'mobx-state-tree';
import Geolocation from '@react-native-community/geolocation';
import {PermissionsService} from '../services/PermissionsService';
import {CoordinatesType} from '../types';
import {getInitialShouts} from '../api/get';
import {postShout} from '../api/post';
import uuid from 'react-native-uuid';
import {INITIAL_COORDINATES, INITIAL_POINTS} from '../constants/shoutsModule';

const Shout = types.model('ShoutModel', {
  id: types.identifier,
  image: types.string,
  text: types.string,
  longitude: types.number,
  latitude: types.number,
});
export type Shout = Instance<typeof Shout>;

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

    fetchInitialShouts: flow(function* () {
      try {
        const shouts = getInitialShouts(self.coordinates);
        self.shouts = cast(shouts);
      } catch (error) {
        console.log(error);
      }
    }),
    fetchShoutsByChosenPosition: flow(function* ({
      longitude,
      latitude,
    }: {
      longitude: number;
      latitude: number;
    }) {
      try {
        const shouts = getInitialShouts({
          longitude,
          latitude,
        });
        self.shouts = cast(shouts);
      } catch (error) {
        console.log(error);
      }
    }),

    submitCast: flow(function* (
      {
        imageName,
        text,
      }: {
        imageName: string;
        text: string;
      },
      onSuccess: () => void,
    ) {
      try {
        const shout = {
          id: uuid.v4(),
          image: imageName,
          text,
          ...self.coordinates,
        };
        console.log('=====', shout);
        postShout(shout);
        self.points -= 3;
        onSuccess();
      } catch (error) {
        console.log(error);
      }
    }),
  }));
