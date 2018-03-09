import axios from 'axios';
import {
  COURSE_FETCHING_DATA,
  COURSE_FETCHING_DATA_SUCCESS,
  COURSE_FETCHING_DATA_FAILURE,
  COURSE_RATINGS,
  INCREASE_INDEX_PAGE,
  STOP_LOAD,
  IS_LOADING,
} from '../../constants/constantListCourse';
export function getData() {
  return {
    type: COURSE_FETCHING_DATA,
  };
}

export function loadingData(isLoading){
  return {
    type : IS_LOADING,
    isLoading
  }
}

export function stopLoad() {
  return {
    type: STOP_LOAD,
  };
}


export function increaseIndexPage() {
  return {
    type: INCREASE_INDEX_PAGE,
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

export function fetchDatasIndexPage(indexPage) {
   return  function(dispatch) {
    return axios({
      method: 'get',
      url: 'http://10.10.1.65:8080/api-1.0/api/page/'+indexPage,
      response: 'json',
    })
      .then(response => {
        let data = response.data;
        if(data.length === 0){
          dispatch(stopLoad());
        }else{
          dispatch(getDataSuccess(data));
          dispatch(loadingData(false));
        }
      })
      .catch(response => dispatch(getDataFailure()));
  };
}

export function increasePage () {
  return function(dispatch){
    dispatch(increaseIndexPage());
  }
}

export function resetData(){
  return function(dispatch){
    dispatch(getData());
  }
}

export function changeValueIsLoading(isLoading){
  return function(dispatch){
    dispatch(loadingData(isLoading));
  }
}