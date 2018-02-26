import * as types from '../../constants/sectionConstants';
import axios from 'axios';
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
          //console.log(response.data);
        })
        .catch(response => dispatch(getDataFailureSection()));
    };
  };