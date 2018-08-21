import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import TrainingDetail from './TrainingDetail';

class TrainingList extends Component {
  state = { trainings: [] };

  componentWillMount() {
    axios.get('http://127.0.0.1:2300/api/trainings')
      .then(response => this.setState({ trainings: response.data }));
  }

  renderTrainings() {
    return this.state.trainings.map(training =>
      <TrainingDetail key={training.id} training={training} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderTrainings()}
      </ScrollView>
    );
  }
}

export default TrainingList;
