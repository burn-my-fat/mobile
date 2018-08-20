/** @format */

import React from 'react';
import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';
import Header from './src/components/Header';
import MuscleGroupList from './src/components/MuscleGroupList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Muscle Group'} />
    <MuscleGroupList />
  </View>
);

AppRegistry.registerComponent(appName, () => App);
