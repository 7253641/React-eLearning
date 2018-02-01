import { combineReducers } from 'redux';
import chapters from './chapters';

const myReducer = combineReducers({
  chapters //chapters:chapters
})

export default myReducer;