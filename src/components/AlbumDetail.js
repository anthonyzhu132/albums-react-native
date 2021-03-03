import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  const { 
    thumbnailStyle, 
    headerContentStyle, 
    thumbnailContainerStyle,
    headerTextStyle 
  } = styles;

  return (
    <Card>
      <CardItem>
        <View style={thumbnailContainerStyle}>
          <Image 
          style={thumbnailStyle} 
          source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justiftyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle : {
    justiftyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
}

export default AlbumDetail;