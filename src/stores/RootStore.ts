import {useContext, createContext} from 'react';
import {
  types,
  Instance,
  getSnapshot,
  applySnapshot,
  flow,
} from 'mobx-state-tree';

import persist from 'mst-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {ShoutsStore} from './ShoutsStore';

const RootModel = types
  .model({
    shoutsStore: ShoutsStore,
  })
  .actions(self => {
    let initialState = {};
    return {
      afterCreate: flow(function* () {
        try {
          initialState = getSnapshot(self);
        } catch (error) {
          console.log(error);
        }
      }),
      resetStore() {
        applySnapshot(self, initialState);
      },
    };
  });

export const createStore = (): RootInstance => {
  const shoutsStore = ShoutsStore.create();

  const rootStore = RootModel.create({
    shoutsStore,
  });

  // persist('shoutsStore', shoutsStore, {
  //   storage: AsyncStorage,
  //   jsonify: true,
  //   blacklist: [],
  // });

  return rootStore;
};

export const rootStore = createStore();

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const {Provider} = RootStoreContext;

export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
