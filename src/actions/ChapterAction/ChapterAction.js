import * as types from '../../constants/chapterConstants';
import axios from 'axios';

export const getData = () => {
  return {
    type: types.FETCHING_DATA,
  };
};

export const getDataSuccess = chapters => {
  return {
    type: types.FETCHING_DATA_SUCCESS,
    chapters,
  };
};

export const getDataFailure = () => {
  return {
    type: types.FETCHING_DATA_FAILURE,
  };
};

export const fetchData = () => {
  return dispatch => {
    dispatch(getData());
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(response => {
        dispatch(getDataSuccess(response.data));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};
