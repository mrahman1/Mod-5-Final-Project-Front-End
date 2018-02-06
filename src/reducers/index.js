import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer'
import usersReducer from './usersReducer'
import candidatesReducer from './candidatesReducer'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  jobs: jobsReducer,
  currentUser: usersReducer,
  candidate: candidatesReducer
});

export default rootReducer;
