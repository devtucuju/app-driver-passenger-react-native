import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persitor} from './src/store';

import Navigator from './src/navigators';

import {theme} from './src/styles/theme';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persitor}>
        <PaperProvider theme={theme}>
          <Navigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
