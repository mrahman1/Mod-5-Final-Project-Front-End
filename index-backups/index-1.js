import {
  ADD_JOB,
  LOGIN,
  LOGOUT,
  ADD_CANDIDATE,
  ADD_APPLICATION,
  CURRENT_JOB
} from './types';

export function currentJob(job){
  return {type: CURRENT_JOB, job }
}

export function addJob(job){
  return dispatch => {
    let options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(job)
    }
    fetch('http://localhost:3000/jobs',options)
      .then(res => res.json())
      .then(json => dispatch({type: ADD_JOB, job: json}))
  }
}

export function addCandidate(candidate){
  return dispatch => {
    let options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(candidate)
    }
    fetch('http://localhost:3000/candidates',options)
      .then(res => res.json())
      .then(json => dispatch({type: ADD_CANDIDATE, candidate: json}))
  }
}

export function addApplication(app){
  return dispatch => {
    let options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(app)
    }
    fetch('http://localhost:3000/applications',options)
      .then(res => res.json())
      .then(json => dispatch({type: ADD_APPLICATION, app: json}))
  }
}

// export function fetchJobs(){
//   return dispatch => {
//     fetch('http://localhost:3000/jobs')
//       .then(response => response.json())
//       .then(jobs => dispatch({type: FETCH_JOBS, jobs}));
//   };
// }

export function login(email, password){
  return dispatch => {
    let options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    }
    fetch('http://localhost:3000/auth', options)
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token',json.jwt)
        dispatch({type: LOGIN, user:json })
      })
  }
}

export function getCurrentUser(){
  return(dispatch) => {
    let headers = {
      headers: {'Authorization': localStorage.getItem('token')}
    }

    return fetch('http://localhost:3000/current_user',headers)
      .then(res => res.json())
      .then(json => {
        dispatch({type: LOGIN, user: json})
      })
  }
}

export function logout(){
  localStorage.removeItem('token');
  return {type: LOGOUT}
}
