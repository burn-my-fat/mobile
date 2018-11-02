import axios from 'axios';
import { TRAININGS_FETCH_SUCCESS } from './types';

export const trainingTypesFetch = () => {
  return (dispatch) => {
    axios.get('http://127.0.0.1:2300/api/trainings')
      .then(response => {
        dispatch({ type: TRAININGS_FETCH_SUCCESS, payload: response.data });
      });
  };
};
