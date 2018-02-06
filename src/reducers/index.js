import { combineReducers } from 'redux';
import chapters from './chaptersReducers';
import dataReducer from '../reducers/listCourseReducer';
import videoReducer from '../reducers/videoReducer';

const myReducer = combineReducers({
  chapters, //chapters:chapters
  dataReducer,
  videoReducer,
});

export default myReducer;
