import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import TrainingTypeList from './components/TrainingTypeList';
import MuscleGroupList from './components/MuscleGroupList';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="main">
          <Scene
            key="trainingTypeList"
            component={TrainingTypeList}
            title="TrainingTypes"
            navigationBarStyle={styles.navigationBarStyle}
            initial
          />

          <Scene
            key="muscleGroupList"
            component={MuscleGroupList}
            title="MuscleGroups"
            navigationBarStyle={styles.navigationBarStyle}
          />
        </Scene>
      </Stack>
    </Router>
  );
};

const styles = {
  navigationBarStyle: {
    backgroundColor: 'rgb(254, 203, 89)',
  }
};

export default RouterComponent;
