import LocationPermission from './locationPermission';
import Geolocation from 'react-native-geolocation-service';

function LocationCurrent() {
  async function getLocation() {
    return new Promise(async (resolve, _reject) => {
      try {
        let isPermission = await LocationPermission().isPermission();
        if (!isPermission) {
          resolve(false);
        }

        let response = await getCurrentPosition();
        resolve(response);
      } catch (err) {
        resolve(false);
      }
    });
  }

  return {
    getLocation,
  };
}

async function getCurrentPosition() {
  return new Promise(async (resolve, _reject) => {
    try {
      Geolocation.watchPosition(
        position => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          resolve(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          interval: 5000,
        },
      );
    } catch (err) {
      resolve(false);
    }
  });
}

export default LocationCurrent;
