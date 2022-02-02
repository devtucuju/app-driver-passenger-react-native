import React, {useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {checkLogin} from '_actions/AuthAction';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

function Preload() {
  const dispatch = useDispatch();
  const mounted = useRef(false);
  const navigation = useNavigation();
  const status = useSelector(state => state.auth.status);
  useEffect(() => {}, [status]);

  useEffect(() => {
    if (!mounted.current) {
      // do componentDidMount logic
      dispatch(checkLogin());
      mounted.current = true;
    } else {
      // do componentDidUpdate logic
      handleStatusChange();
    }
  }, [status]);

  function handleStatusChange() {
    switch (status) {
      case 1:
        //navega para home
        navigation.reset({
          index: 0,
          routes: [{name: 'Navigator'}],
        });
        break;
      case 2:
        //navega para login
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
        break;
      default:
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Text>Carregando...{status}</Text>
    </View>
  );
}
export {Preload};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
