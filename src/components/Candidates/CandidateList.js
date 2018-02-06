import React from 'react'
import Candidate from './Candidate'
import { connect } from 'react-redux';
import { currentJob } from '../../actions/job-actions'

const CandidateList = (props) => {

  const listCandidates = () => {
    if(props && props.currentUser && props.currentUser.candidates) {
      return props.currentUser.candidates.map((candidate,index) => (
         <Candidate candidate={candidate} key={index}/>
       )
      )
    }
  }



  return (
    <div id="candidate-list">
        <table class="ui celled table" id="candidate-table">
        <thead class="ui inverted grey table head">
          <tr>
           <th>Candidate Name</th>
         </tr>
        </thead>
        <tbody>
          {listCandidates()}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
    currentUser: state.currentUser
  }
};

export default connect(mapStateToProps)(CandidateList);
