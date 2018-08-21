import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const TrainingDetail = ({ training }) => {
  const { name } = training;
  const {
    thumbnailContainerStyle,
    thumbnailStyle,
    headerContentStyle,
    headerTextStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: 'https://png.icons8.com/ios/1600/ios-application-placeholder.png' }}
          />
        </View>

        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{name}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailStyle: {
    height: 48,
    width: 48
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  }
};

export default TrainingDetail;
