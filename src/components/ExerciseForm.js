import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection, Button } from './common';

class ExerciseForm extends Component {
  onMediaButtonPress() {

  }

  onMusclesButtonPress() {

  }

  onDescriptionButtonPress() {

  }

  render() {
    const { name } = this.props.exercise;
    const { labelStyle } = styles;

    return (
      <View>
        <CardSection>
          <Text style={labelStyle}>{name}</Text>
        </CardSection>

        <CardSection>
          <Text style={labelStyle}>Muscle Group</Text>
        </CardSection>

        <CardSection>
          <Button onPress={this.onMediaButtonPress.bind(this)}>
            Media
          </Button>

          <Button onPress={this.onMusclesButtonPress.bind(this)}>
            Muscles
          </Button>

          <Button onPress={this.onDescriptionButtonPress.bind(this)}>
            Description
          </Button>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    flex: 1
  }
};

export default ExerciseForm;
