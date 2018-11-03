import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { muscleGroupsFetch } from '../actions';
import MuscleGroupItem from './MuscleGroupItem';

class MuscleGroupList extends Component {
  componentWillMount() {
    // FIXME: В идеале текущий компонент ничего не должен знать про trainingType.
    // Сверху ему надо прокидывать только мышечные группы, чтобы изолировать видимость.
    this.props.muscleGroupsFetch({ muscleGroups: this.props.trainingType.muscle_groups });

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

const mapStateToProps = state => {
  const muscleGroups = _.map(state.muscleGroups, (val, id) => {
    return { ...val, id };
  });

  return { muscleGroups };
};

export default connect(mapStateToProps, { muscleGroupsFetch })(MuscleGroupList);
