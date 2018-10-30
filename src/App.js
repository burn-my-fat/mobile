import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import TrainingList from './components/TrainingList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Trainings'} />
    <TrainingList />
  </View>
);

export default App;
