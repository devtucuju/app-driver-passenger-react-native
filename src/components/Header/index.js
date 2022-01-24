import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {theme} from '../../styles/theme';

function Header(props) {
  return <Text style={styles.header} {...props} />;
}
export {Header};
const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: theme.colors.text,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
});
