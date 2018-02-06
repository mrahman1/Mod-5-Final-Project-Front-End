import rootReducer from './reducers/index.js';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
