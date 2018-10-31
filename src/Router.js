import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import TrainingList from './components/TrainingList';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="main">
          <Scene
            key="trainingList"
            component={TrainingList}
            title="Trainings"
            initial
          />
        </Scene>
      </Stack>
    </Router>
  );
};

export default RouterComponent;
