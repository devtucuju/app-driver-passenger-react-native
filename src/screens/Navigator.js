import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '_screens/Home';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
}

export {Navigator};
