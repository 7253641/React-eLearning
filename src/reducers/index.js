import { combineReducers } from 'redux';
import chapters from './chapters';
import dataReducer from '../reducers/listCourseReducer';
import videoReducer from '../reducers/videoReducer';

const myReducer = combineReducers({
  chapters,
  dataReducer,
  videoReducer,
});

export default myReducer;
