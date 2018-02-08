import axios from 'axios';
import {
  COURSE_FETCHING_DATA,
  COURSE_FETCHING_DATA_SUCCESS,
  COURSE_FETCHING_DATA_FAILURE,
  COURSE_RATINGS,
} from '../../constants/constantListCourse';

export function getData() {
  return {
    type: COURSE_FETCHING_DATA,
  };
}

export function getDataSuccess(item) {
  return {
    type: COURSE_FETCHING_DATA_SUCCESS,
    item,
  };
}

export function getDataFailure() {
  return {
    type: COURSE_FETCHING_DATA_FAILURE,
  };
}

export function getRating(star) {
  return {
    type: COURSE_RATINGS,
    star,
  };
}

export function postIdWithRedux(postId) {
  return function(dispatch) {
    return axios
      .get('https://jsonplaceholder.typicode.com/posts', {
        // postId: postId,
        params: {
          postId: postId,
        },
      })
      .then(response => {
        console.log('response: ', response);
        console.log('response = ', response.data.postId);
        dispatch(getDataSuccess(response.item));
      })
      .catch(response => dispatch(getDataFailure()));
  };
}

export function fetchDatasWithRedux() {
  return function(dispatch) {
    return axios({
      method: 'get',
      url: 'http://10.10.1.65:8080/api-1.0/api/courses/',
      response: 'json',
    })
      .then(response => {
        console.log(response.data);
        let getThreeItems = response.data;
        dispatch(getDataSuccess(getThreeItems));
      })
      .catch(response => dispatch(getDataFailure()));
  };
}
