import { combineReducers } from 'redux';
import section from './sectionReducers';
import dataReducer from '../reducers/listCourseReducer';
import videoReducer from '../reducers/videoReducer';

const myReducer = combineReducers({
  section, //chapters:chapters
  dataReducer,
  videoReducer,
});

export default myReducer;
