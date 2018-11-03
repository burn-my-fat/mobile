import { combineReducers } from 'redux';
import TrainingReducer from './TrainingReducer';
import MuscleGroupReducer from './MuscleGroupReducer';

export default combineReducers({
  trainings: TrainingReducer,
  muscleGroups: MuscleGroupReducer
});
