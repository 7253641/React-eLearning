import {
  COURSE_FETCHING_DATA,
  COURSE_FETCHING_DATA_SUCCESS,
} from '../constants/constantListCourse';

const initialState = {
  data: [],
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case COURSE_FETCHING_DATA:
      return state;
    case COURSE_FETCHING_DATA_SUCCESS:
      return { ...state, data: [...action.payload] };
    default:
      return state;
  }
}
