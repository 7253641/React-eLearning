import { combineReducers } from 'redux';
import chapters from './chaptersReducers';

const myReducer = combineReducers({
  chapters, //chapters:chapters
});

export default myReducer;
