import axios from 'axios';
import {
  COURSE_FETCHING_DATA,
  COURSE_FETCHING_DATA_SUCCESS,
  COURSE_FETCHING_DATA_FAILURE,
} from '../../constants/constantListCourse';
import * as types from '../../constants/sectionConstants';
export function getData() {
  return {
    type: COURSE_FETCHING_DATA,
  };
}

export function getDataSuccess(payload) {
  return {
    type: COURSE_FETCHING_DATA_SUCCESS,
    payload,
  };
}

export function getDataFailure() {
  return {
    type: COURSE_FETCHING_DATA_FAILURE,
  };
}

export function fetchDatasWithRedux() {
  return function(dispatch) {
    return axios({
      method: 'get',
      url: 'http://10.10.1.65:8080/api-1.0/api/courses',
      response: 'json',
    })
      .then(response => {
        let getThreeItems = response.data;
        dispatch(getDataSuccess(getThreeItems));
      })
      .catch(response => dispatch(getDataFailure()));
  };
}

//detail Course === Session_Name + Video_Name

export const getDataSection = () => {
  return {
    type: types.FETCHING_DATA_SECTION,
  };
};

export const getDataSuccessSection = section => {
  return {
    type: types.FETCHING_DATA_SUCCESS_SECTION,
    section,
  };
};

export const getDataFailureSection = () => {
  return {
    type: types.FETCHING_DATA_FAILURE_SECTION,
  };
};

export const fetchDataSection = id => {
  return dispatch => {
    return axios
      .get('http://10.10.1.65:8080/api-1.1/api/course', {
        params: {
          id: id,
        },
      })
      .then(response => {
        dispatch(getDataSuccessSection(response.data));
      })
      .catch(response => dispatch(getDataFailure()));
  };
};
