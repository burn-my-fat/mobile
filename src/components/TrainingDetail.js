import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const TrainingDetail = ({ training }) => {
  const { name } = training;
  const {
    buttonStyle,
    thumbnailContainerStyle,
    thumbnailStyle,
    headerContentStyle,
    headerTextStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <TouchableOpacity style={buttonStyle}>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{ uri: 'https://png.icons8.com/ios/1600/ios-application-placeholder.png' }}
            />
          </View>

          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{name}</Text>
          </View>
        </TouchableOpacity>
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
  },
  buttonStyle: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingTop: 5,
    paddingBottom: 5
  }
};

export default TrainingDetail;
