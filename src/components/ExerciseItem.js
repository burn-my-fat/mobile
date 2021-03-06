import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ExerciseItem extends Component {
  onRowPress() {
    Actions.exerciseForm({ exercise: this.props.exercise });
  }

  render() {
    const {
      thumbnailContainerStyle,
      thumbnailStyle,
      titleContainerStyle,
      titleTextStyle
    } = styles;

    const { name } = this.props.exercise;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <View style={thumbnailContainerStyle}>
              <Image
                style={thumbnailStyle}
                source={{ uri: 'https://png.icons8.com/ios/1600/ios-application-placeholder.png' }}
              />
            </View>

            <View style={titleContainerStyle}>
              <Text style={titleTextStyle}>
                {name}
              </Text>
            </View>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

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
  titleContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  titleTextStyle: {
    fontSize: 18
  }
};

export default ExerciseItem;
