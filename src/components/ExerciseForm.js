import React, { Component } from 'react';
import { View } from 'react-native';
import { CardSection, Input } from './common';

class ExerciseForm extends Component {
  render() {
    const { name } = this.props.exercise;

    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Bench Press"
            value={name}
          />
        </CardSection>
      </View>
    );
  }
}

export default ExerciseForm;
