import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { muscleGroupsFetch } from '../actions';
import MuscleGroupItem from './MuscleGroupItem';

class MuscleGroupList extends Component {
  componentWillMount() {
    this.props.muscleGroupsFetch({ muscleGroups: this.props.muscleGroups });

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ muscleGroups }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(muscleGroups);
  }

  renderRow(muscleGroup) {
    return <MuscleGroupItem muscleGroup={muscleGroup} />;
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

export default connect(null, { muscleGroupsFetch })(MuscleGroupList);
