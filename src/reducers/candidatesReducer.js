import {
  CURRENT_CANDIDATE,
  UPLOAD_FILE,
  FETCH_POSTS
} from '../actions/types'

const candidatesReducer = (state = null, action) =>  {
  switch (action.type){

    case CURRENT_CANDIDATE:
      return action.candidate

      case UPLOAD_FILE:
        return state;

        case FETCH_POSTS:
          return state;

    default:
      return state;
  }
};

export default candidatesReducer;
