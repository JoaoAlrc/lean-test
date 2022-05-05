import React from 'react';
import {StatusBar} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AppNavigator from './services/routes';
import reducers from './services/store';

const App = () => (
  <Provider store={createStore(reducers)}>
    <StatusBar backgroundColor="#008dff" barStyle="light-content" />
    <AppNavigator />
  </Provider>
);

export default App;
