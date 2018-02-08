import * as types from '../constants/sectionConstants';

const initialState = {
  section: [],
  dataFetched: false,
  isFetching: false,
  error: false,
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_DATA_SECTION:
      return {
        ...state,
        section: [],
        isFetching: true,
      };
    case types.FETCHING_DATA_SUCCESS_SECTION:
      return {
        ...state,
        isFetching: false,
        section: action.section,
      };
    case types.FETCHING_DATA_FAILURE_SECTION:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default myReducer;
