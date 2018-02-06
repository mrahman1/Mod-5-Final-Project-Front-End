import {
  LOGIN,
  LOGOUT,
  ADD_JOB,
  DELETE_JOB,
  EDIT_JOB,
  EDIT_CANDIDATE,
  DELETE_CANDIDATE,
  ADD_CANDIDATE,
  ADD_APPLICATION,
  ADD_HIRING_STAGE,
  UPDATE_APPLICATION_STAGE
} from '../actions/types'

const usersReducer = (state = {
  id: null,
  email: null,
  jobs: [],
  candidates: [],
  applications: null,

}, action) =>  {
  // console.log("usersReducer.action=", action)
  switch (action.type){

    case LOGIN:
      return {
          id: action.user.id,
          email: action.user.email,
          jobs: action.user.jobs,
          candidates: action.user.candidates,
          applications: action.user.applications,
          error: action.user.error
        }

    case ADD_JOB:
      return {...state, jobs: [...state.jobs, action.job]}

    case DELETE_JOB:
      var index = state.jobs.findIndex(job => job.id === action.job.id)
        return {...state, jobs: [...state.jobs.slice(0,index), ...state.jobs.slice(index+1)]}


    case EDIT_JOB:
      var index = state.jobs.findIndex(job => job.id === action.job.id)
      var newJobs = [...state.jobs]
      newJobs[index] = action.job
      return {...state, jobs: newJobs}

      case LOGOUT:
        return null;

      case DELETE_CANDIDATE:
        var index = state.candidates.findIndex(candidate => candidate.id === action.candidate.id)
          return {...state, candidates: [...state.candidates.slice(0,index), ...state.candidates.slice(index+1)]}

      case EDIT_CANDIDATE:
        var index = state.candidates.findIndex(candidate => candidate.id === action.candidate.id)
        var newCandidates = [...state.candidates]
        newCandidates[index] = action.candidate
        return {...state, candidates: newCandidates}

      case ADD_CANDIDATE:
        return {...state, candidates: [...state.candidates, action.candidate]}

    case UPDATE_APPLICATION_STAGE:
      var index = state.applications.findIndex(application => application.id === action.application.id)
      var newApplications= [...state.applications]
      newApplications[index] = action.application
      return {...state, applications: newApplications}

      // case ADD_APPLICATION:
      //   debugger;
      //   let candidate = state.candidates.find((candidate)=>(candidate.id === action.application.candidate_id))
      //   if (candidate){
      //     var index = state.candidates.findIndex(candidate => candidate.id === action.candidate.id)
      //     var newCandidates = [...state.candidates]
      //     let currentCandidate = newCandidates[index]
      //     let updatedCandidate = [...currentCandidate, jobs: action.application.job_id]
      //     return {...state, candidates: newCandidates}
      //   }
      //
      //   [...]}return {...state, candidates: [...state.candidates, action.candidate]}}


      // case ADD_HIRING_STAGE:
      //   return {...state, jobs: [...state.jobs, action.job]}


    default:
      return state;
  }
};



export default usersReducer;
