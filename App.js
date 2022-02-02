import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger';

import {Reducers} from './src/reducers';
import {Preload} from './src/screens/Preload';
import {Login} from './src/screens/Login';
import {Register} from './src/screens/Register';
import {Forgot} from './src/screens/Forgot';
import {Navigator} from '_screens/Navigator';
import {theme} from './src/styles/theme';

const Stack = createNativeStackNavigator();

let middleware = [];
if (__DEV__) {
  middleware = [...middleware, Thunk, Logger];
  console.log('Running in dev mode');
} else {
  middleware = [...middleware, Thunk];
}
const store = createStore(Reducers, applyMiddleware(...middleware));

function App() {
  const getRouteName = async (routes, index) => {
    console.log(JSON.stringify(routes[index].name));
  };
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer
          onStateChange={({routes, index}) => getRouteName(routes, index)}>
          <Stack.Navigator>
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Register"
              component={Register}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Forgot"
              component={Forgot}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Navigator"
              component={Navigator}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
