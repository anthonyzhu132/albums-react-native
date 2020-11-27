import React from 'react';
import Header from './src/components/header';
import {AppRegistry} from 'react-native';

const App = () => (
  <Header />
);

AppRegistry.registerComponent('albums', () => App);

export default App;