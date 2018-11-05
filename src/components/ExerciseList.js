import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { exercisesFetch } from '../actions';
import ExerciseItem from './ExerciseItem';

class ExerciseList extends Component {
  componentWillMount() {
    this.props.exercisesFetch({ exercises: this.props.exercises });

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ exercises }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(exercises);
  }

  renderRow(exercise) {
    return <ExerciseItem exercise={exercise} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

export default connect(null, { exercisesFetch })(ExerciseList);
