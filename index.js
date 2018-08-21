/** @format */

import React from 'react';
import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';
import Header from './src/components/Header';
import TrainingList from './src/components/TrainingList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Trainings'} />
    <TrainingList />
  </View>
);

AppRegistry.registerComponent(appName, () => App);
