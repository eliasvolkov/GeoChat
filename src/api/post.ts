import {INITIAL_SHOUTS} from '../__mocks__/initialShouts';
import {Shout} from '../stores/ShoutsStore';

export const postShout = (shout: Shout) => {
  INITIAL_SHOUTS.push(shout);
  console.log('INITIAL', INITIAL_SHOUTS);
  return shout;
};
