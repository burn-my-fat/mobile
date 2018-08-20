import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import MuscleGroupDetail from './MuscleGroupDetail';

class MuscleGroupList extends Component {
  state = { muscleGroups: [] };

  componentWillMount() {
    axios.get('http://127.0.0.1:2300/api/muscle_groups')
      .then(response => this.setState({ muscleGroups: response.data }));
  }

  renderMuscleGroups() {
    return this.state.muscleGroups.map(muscleGroup =>
      <MuscleGroupDetail key={muscleGroup.id} muscleGroup={muscleGroup} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderMuscleGroups()}
      </ScrollView>
    );
  }
}

export default MuscleGroupList;
