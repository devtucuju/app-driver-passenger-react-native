import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {theme} from '../core/theme';

function Header(props) {
  return <Text style={styles.header} {...props} />;
}
export {Header};
const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: '#FFF',
    fontWeight: 'bold',
    paddingVertical: 12,
  },
});
