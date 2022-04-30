import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  SplashStack,
  LoginStack,
  RegisterStack,
  ForgotStack,
  HomeStack,
} from './stack';

const Drawer = createDrawerNavigator();

const getRouteName = async (routes, index) => {
  console.log(JSON.stringify(routes[index].name));
};

const Routes = props => {
  return (
    <NavigationContainer
      onStateChange={({routes, index}) => getRouteName(routes, index)}>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Splash"
          component={SplashStack}
          optins={{
            gestureEnabled: false,
            unmountOnBlur: true,
            drawerLabel: () => null,
          }}
        />
        <Drawer.Screen
          name="Login"
          component={LoginStack}
          options={{
            gestureEnabled: false,
            unmountOnBlur: true,
            drawerLabel: () => null,
          }}
        />
        <Drawer.Screen
          name="Login"
          component={RegisterStack}
          options={{
            gestureEnabled: false,
            unmountOnBlur: true,
            drawerLabel: () => null,
          }}
        />
        <Drawer.Screen
          name="Login"
          component={ForgotStack}
          options={{
            gestureEnabled: false,
            unmountOnBlur: true,
            drawerLabel: () => null,
          }}
        />
        <Drawer.Screen
          name="Login"
          component={HomeStack}
          options={{
            gestureEnabled: false,
            unmountOnBlur: true,
            drawerLabel: () => null,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
