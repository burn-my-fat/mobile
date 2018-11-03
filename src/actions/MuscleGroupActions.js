import { MUSCLE_GROUPS_FETCH_SUCCESS } from './types';

export const muscleGroupsFetch = ({ muscleGroups }) => {
  return (dispatch) => {
    dispatch({ type: MUSCLE_GROUPS_FETCH_SUCCESS, payload: muscleGroups });
  };
};
