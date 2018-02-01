import * as types from '../constants/index';
// import callAPI from '../api/apiCaller';
import axios from 'axios';

export function getData() {
    return {
      type: types.FETCHING_DATA
    }
  }
  
  export function getDataSuccess(chapters) {
    return {
      type: types.FETCHING_DATA_SUCCESS,
      chapters,
    }
  }
  
  export function getDataFailure() {
    return {
      type: types.FETCHING_DATA_FAILURE
    }
  }
  
  export function fetchData() {
    return (dispatch) => {
      dispatch(getData())
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response =>{
          dispatch(getDataSuccess(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    } 
  }