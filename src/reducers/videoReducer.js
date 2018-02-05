import actionTypes from '../actions/videoActions/actionTypes';

export const INITIAL_STATE = {
  URL: '',
  fecthStatus: '',
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.VIDEO_FETCH_REQUESTED:
      return {
        ...state,
        fecthStatus: 'fetching ...',
      };
    case actionTypes.VIDEO_FETCH_FULFILLED: {
      return {
        ...state,
        fecthStatus: `fetched`,
        URL: action.payload,
      };
    }
    case actionTypes.VIDEO_FETCH_REJECTED:
      return {
        ...state,
        fecthStatus: `error: ${action.payload}`,
      };
    default:
      return state;
  }
};

export default reducer;
