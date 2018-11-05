import { combineReducers } from 'redux';
import TrainingReducer from './TrainingReducer';
import MuscleGroupReducer from './MuscleGroupReducer';
import ExerciseReducer from './ExerciseReducer';

export default combineReducers({
  trainings: TrainingReducer,
  muscleGroups: MuscleGroupReducer,
  exercises: ExerciseReducer
});
