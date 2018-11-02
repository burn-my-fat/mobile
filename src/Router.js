import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import TrainingTypeList from './components/TrainingTypeList';

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
