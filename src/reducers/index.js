import { combineReducers } from 'redux';
import chapters from './chapters';
import dataReducer from '../reducers/listCourseReducer';
const myReducer = combineReducers({
  chapters,
  dataReducer,
});

export default myReducer;
