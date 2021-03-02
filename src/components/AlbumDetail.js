import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardItem>
        <View></View>
        <View style={styles.headerContentStyle}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardItem>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justiftyContent: 'space-around'
  }
}

export default AlbumDetail;