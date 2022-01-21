import React, {useEffect, useCallback, useState} from 'react';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid} from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
} from 'react-native';

const App = () => {
  const [initialPosition, setInitialPosition] = useState({
    latitude: 0,
    longitude: 0,
    accuracy: 0,
  });

  console.log(`initial position - ${JSON.stringify(initialPosition)}`);

  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'DevsUber App',
          message: 'This app need access your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        return true;
      } else {
        console.log('location permission denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
    }
  }
  useEffect(() => {
    if (requestLocationPermission()) {
      Geolocation.getCurrentPosition(
        position => {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          let accuracy = position.coords.accuracy;
          setInitialPosition({latitude, longitude, accuracy});
        },
        error => Alert.alert('Error', JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      );
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
