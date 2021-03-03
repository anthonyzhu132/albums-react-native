import React from 'react';
import Header from './src/components/Header';
import { AppRegistry, View } from 'react-native';
import AlbumList from './src/components/AlbumList';

const App = () => {
return (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'}/>
    <AlbumList />
  </View>
  );
};

AppRegistry.registerComponent('albums', () => App);

export default App;