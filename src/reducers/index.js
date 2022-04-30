import {combineReducers} from 'redux';
import {authReducer} from './authReducer';

const Reducers = combineReducers({
  auth: authReducer,
});

export {Reducers};
