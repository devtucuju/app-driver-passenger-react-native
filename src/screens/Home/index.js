import React, {useState, useEffect} from 'react';
import LocationCurrent from '../../services/locationCurrent';
import MapView from 'react-native-maps';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Animated,
} from 'react-native';
import {useSelector} from 'react-redux';
import {SearchBox} from '_components/SearchBox';

function Home() {
  // const status = useSelector(state => state.auth.status);
  const [initialPosition, setInitialPosition] = useState({
    latitude: -23.7,
    longitude: -46.8,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState('');
  const [warnHeight, setwarnHeight] = useState(new Animated.Value(0));

  useEffect(() => {
    setWarning(true, 'Procurando sua localização!');
    checkUserCoords();
  }, []);

  const checkUserCoords = async () => {
    let coord = await LocationCurrent().getLocation();

    if (coord && coord.latitude && coord.longitude) {
      setWarning(false, '');
      setInitialPosition({
        latitude: coord.latitude,
        longitude: coord.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    } else {
      setWarning(false, '');
      setInitialPosition(null);
    }
  };

  function setWarning(status, msg) {
    if (status === true && msg !== '') {
      setLoading(status);
      setLoadingMsg(msg);
      Animated.timing(warnHeight, {
        toValue: 40,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    } else if (!status) {
      setLoading(status);
      setLoadingMsg('');
      Animated.timing(warnHeight, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />

      <MapView style={styles.map} region={initialPosition} />

      <Animated.View style={[styles.warnbox, {height: warnHeight}]}>
        <Text style={styles.text}>{loadingMsg}</Text>
      </Animated.View>
      <SearchBox placeholder="Para onde vamos?" />
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
  warnbox: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#000000',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 13,
    color: '#fff',
  },
});
