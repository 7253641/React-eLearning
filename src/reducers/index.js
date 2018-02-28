import { combineReducers } from 'redux';
import section from './sectionReducers';
import dataReducer from '../reducers/listCourseReducer';


const myReducer = combineReducers({
  section, //chapters:chapters
  dataReducer,
});

export default myReducer;
