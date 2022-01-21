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

const Stack = createNativeStackNavigator();
let middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, Thunk, Logger];
} else {
  middleware = [...middleware, Thunk];
}
const store = createStore(Reducers, applyMiddleware(...middleware));

function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={Login}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
