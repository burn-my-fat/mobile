import { EXERCISES_FETCH_SUCCESS } from './types';

export const exercisesFetch = ({ exercises }) => {
  return (dispatch) => {
    dispatch({ type: EXERCISES_FETCH_SUCCESS, payload: exercises });
  };
};
