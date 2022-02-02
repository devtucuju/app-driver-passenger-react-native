import React, {useState, useEffect} from 'react';
import LocationCurrent from '../../services/locationCurrent';
import MapView from 'react-native-maps';

import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {Snackbar} from 'react-native-paper';
import {useSelector} from 'react-redux';

function Home() {
  const status = useSelector(state => state.auth.status);
  const [initialPosition, setInitialPosition] = useState({
    latitude: -23.7,
    longitude: -46.8,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState('');
  console.log(initialPosition);
  useEffect(() => {
    checkUserCoords();
  }, []);

  const checkUserCoords = async () => {
    setLoading(true);
    setLoadingMsg('Procurando sua localização!');
    let coord = await LocationCurrent().getLocation();

    if (coord && coord.latitude && coord.longitude) {
      setLoading(false);
      setLoadingMsg('');
      setInitialPosition({
        latitude: coord.latitude,
        longitude: coord.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    } else {
      setLoading(false);
      setLoadingMsg('');
      setInitialPosition(null);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />

      <MapView style={styles.map} region={initialPosition} />
    </SafeAreaView>
  );
}
export {Home};

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
