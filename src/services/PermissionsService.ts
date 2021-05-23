import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {isIos} from '../utils';
class Permissions {
  async requestLocationPermissions() {
    const PERMISSION_TITLE = isIos
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION;
    const result = await request(PERMISSION_TITLE);
    return result === RESULTS.GRANTED;
  }
}

export const PermissionsService = new Permissions();
