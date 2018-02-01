import { createStore, applyMiddleware } from 'redux'
import myReducer from './reducers'
import thunk from 'redux-thunk' //import thunk

export default function configureStore() {
  let store = createStore(myReducer, applyMiddleware(thunk)) // create store sử dụng thunk
  return store
}