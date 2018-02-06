import {
  CURRENT_JOB,
  CURRENT_APPLICATION
} from '../actions/types'

const jobsReducer = (state = {
  id: null,
  description: null,
  title: null,
  position: null,
  application_ids: null
}, action) =>  {
  switch (action.type){

    case CURRENT_JOB:
      return action.job

      case CURRENT_APPLICATION:
        return action.app

    default:
      return state;
  }
};

export default jobsReducer;
