import * as types from '../constants/index';



const initialState = {
    chapters: [],
    dataFetched: false,
    isFetching: false,
    error: false
  }
const myReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.FETCHING_DATA:
        return {
          ...state,
          chapters: [],
          isFetching: true
        }
      case types.FETCHING_DATA_SUCCESS:
        return {
          ...state,
          isFetching: false,
          chapters: action.chapters
        }
      case types.FETCHING_DATA_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: true
        }
      default:
        return state
    }
  }

  export default myReducer;