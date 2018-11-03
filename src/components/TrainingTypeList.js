import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { trainingTypesFetch } from '../actions';
import TrainingTypeItem from './TrainingTypeItem';

class TrainingTypeList extends Component {
  componentWillMount() {
    this.props.trainingTypesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ trainingTypes }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(trainingTypes);
  }

  renderRow(trainingType) {
    return <TrainingTypeItem trainingType={trainingType} />;
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
  const trainingTypes = _.map(state.trainings, (val, id) => {
    return { ...val, id };
  });

  return { trainingTypes };
};

export default connect(mapStateToProps, { trainingTypesFetch })(TrainingTypeList);
