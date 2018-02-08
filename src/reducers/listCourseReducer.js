import {
  COURSE_FETCHING_DATA,
  COURSE_FETCHING_DATA_SUCCESS,
  COURSE_RATINGS,
} from '../constants/constantListCourse';

const initialState = {
  data: [],
  rating: [],
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case COURSE_FETCHING_DATA:
      return state;
    case COURSE_FETCHING_DATA_SUCCESS:
      return { ...state, data: [...action.item] };
    case COURSE_RATINGS:
      return { ...state, rating: [...action.star] };
    default:
      return state;
  }
}
