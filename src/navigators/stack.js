import React from 'react';
import {createStackNavigator} from '@react-navigation/native-stack';
import {Splash} from '_screens/Splash';
import {Login} from '_screens/Login';
import {Register} from '_screens/Register';
import {Forgot} from '_screens/Forgot';
import {Home} from '_screens/Home';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const SplashStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const ForgotStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Forgot">
      <Stack.Screen name="Home" component={Forgot} />
    </Stack.Navigator>
  );
};

const RegisterStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen name="Home" component={Register} />
    </Stack.Navigator>
  );
};

export {SplashStack, LoginStack, RegisterStack, ForgotStack, HomeStack};
