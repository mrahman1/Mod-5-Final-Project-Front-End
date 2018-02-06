import React from "react";
import { connect } from "react-redux";
import ApplicationNew from './ApplicationNew'
import Application from './Application'
import { Link } from 'react-router-dom';
import {currentCandidate} from '../../actions/candidate-actions'
import {currentApplication} from '../../actions/app-actions'

class ApplicationList extends React.Component{

  state = {
    addNewApplication: false
  }

  getApplications = () => {
      let targetApplications =
        this.props.currentUser.applications.filter(application =>
          (application.job_id  === this.props.job.id)
      );
      return targetApplications.map(application => {
        return <Application application={application} />
      })
  };

  handleAddNewCandidate = (e) => {
    this.setState({addNewApplication: !this.state.addNewApplication})
  }

  render(){
  //  console.log(this.state)
  return (
    <div id="jobs-grid">
      <button class="ui yellow button" onClick={this.handleAddNewCandidate}>Add New Application </button>
      {this.state.addNewApplication ? <ApplicationNew/> : null}

      <table class="ui celled table" id="application-table">
        <thead class="ui inverted grey table head" id="job-table-head">
          <tr>
            <th>Candidate Name</th>
            <th>Stage</th>
            <th>Reject or Advance </th>
          </tr>
        </thead>
        <tbody>
        {this.props.currentUser.applications ? this.getApplications() : null}
        </tbody>
      </table>
    </div>

  );
};
};

let mapStateToProps = state => {
  return {
    job: state.jobs,
    currentUser: state.currentUser,
    candidate: state.candidate
  };
};

export default connect(mapStateToProps, {currentCandidate, currentApplication} )(ApplicationList);
