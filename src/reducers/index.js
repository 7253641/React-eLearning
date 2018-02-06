import { combineReducers } from 'redux';
<<<<<<< .merge_file_5khsEh
import chapters from './chaptersReducers';

const myReducer = combineReducers({
  chapters, //chapters:chapters
=======
import chapters from './chapters';
import dataReducer from '../reducers/listCourseReducer';
import videoReducer from '../reducers/videoReducer';

const myReducer = combineReducers({
  chapters,
  dataReducer,
  videoReducer,
>>>>>>> .merge_file_CnGYkg
});

export default myReducer;
