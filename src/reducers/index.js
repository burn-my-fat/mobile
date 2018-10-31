import { combineReducers } from 'redux';
import TrainingReducer from './TrainingReducer';

export default combineReducers({
  trainings: TrainingReducer
});
