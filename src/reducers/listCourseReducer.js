import {
  COURSE_FETCHING_DATA,
  COURSE_FETCHING_DATA_SUCCESS,
  COURSE_RATINGS,
  INCREASE_INDEX_PAGE,
  STOP_LOAD,
  IS_LOADING,
} from '../constants/constantListCourse';

const initialState = {
  data: [],
  rating: [],
  indexPage: -1,
  canLoad: true,
  isLoading : false,
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case COURSE_FETCHING_DATA:
      return {...state , data:[]};
    case COURSE_FETCHING_DATA_SUCCESS:
      return { ...state, data: [...state.data,...action.item] };
    case COURSE_RATINGS:
      return { ...state, rating: [...action.star] };
    case INCREASE_INDEX_PAGE:
      return { ...state, indexPage: state.indexPage + 1 };
    case STOP_LOAD:
      return { ...state, canLoad: false};
    case IS_LOADING:
      return { ...state,  isLoading : action.isLoading};
    default:
      return state;
  }
}

