import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import ReduxThunk from "redux-thunk";

import AppNavigator from './navigation/AppNavigator';
import placesReducer from "./store/places-reducer";
import { init } from "./helpers/db";


init()
  .then(() => {
    console.log("Initialized database");
  }).catch(err => {
    console.log("Initialized database failed");
    console.log(err);
  });
const rootReducer = combineReducers({
  places: placesReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
