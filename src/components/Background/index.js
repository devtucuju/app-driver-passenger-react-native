import {
  KeyboardAvoidingView,
  ImageBackground,
  StyleSheet,
  Platform,
} from 'react-native';
import React from 'react';

const background = require('_assets/images/bg.jpg');

function Background({children}) {
  return (
    <ImageBackground
      source={background}
      // resizeMode="repeat"
      style={styles.background}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled>
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
export {Background};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    // backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
