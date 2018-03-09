import { combineReducers } from 'redux';
import section from './sectionReducers';
import dataReducer from '../reducers/listCourseReducer';
import { reducer as form  } from 'redux-form';


const myReducer = combineReducers({
  form,
  section, //chapters:chapters
  dataReducer,
});

export default myReducer;
