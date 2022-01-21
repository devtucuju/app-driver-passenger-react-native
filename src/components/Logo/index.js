import React from 'react';
import {Image, StyleSheet} from 'react-native';
const logo = require('_assets/images/logo.png');

function Logo() {
  return <Image source={logo} style={styles.image} />;
}
export {Logo};
const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
});
