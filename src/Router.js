import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import TrainingTypeList from './components/TrainingTypeList';
import MuscleGroupList from './components/MuscleGroupList';
import ExerciseList from './components/ExerciseList';
import ExerciseForm from './components/ExerciseForm';

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

          <Scene
            key="exerciseList"
            component={ExerciseList}
            title="Exercises"
            navigationBarStyle={styles.navigationBarStyle}
          />

          <Scene
            key="exerciseForm"
            component={ExerciseForm}
            title="Exercise Details"
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
