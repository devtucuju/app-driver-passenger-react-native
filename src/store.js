import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {Reducers} from './reducers';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger';

const persistedReducer = persistReducer(
  {
    key: 'devmobilidade',
    storage: AsyncStorage,
    whitelist: ['auth'],
  },
  Reducers,
);

let middleware = [];
if (__DEV__) {
  middleware = [...middleware, Thunk, Logger];
  console.log('Running in dev mode');
} else {
  middleware = [...middleware, Thunk];
}
const store = createStore(persistedReducer, applyMiddleware(...middleware));

const persitor = persistStore(store);

export {store, persitor};
