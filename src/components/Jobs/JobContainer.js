import React from "react";
import { connect } from "react-redux";
import JobDescription from "./JobDescription";
import ApplicationList from "../JobApplications/ApplicationList";
import JobEdit from "./JobEdit";
import HiringFlow from './HiringFlow';
import { Route, Switch, withRouter } from "react-router-dom";
import {currentJob} from "../../actions/job-actions"

class JobContainer extends React.Component {
  state = {
    jobDescription: false,
    candidateList: true,
    jobEdit: false,
    hiringFlow: false
  };

  findJob = () => {
      let foundJob = this.props.currentUser.jobs.find(job => (job.id === parseInt(this.props.match.params.jobId)))
      console.log('foundJob', foundJob);
      return (
        this.props.currentJob(foundJob)
      )
}



  handleSelectJobDescription = e => {
    this.setState({
      jobDescription: true,
      candidateList: false,
      jobEdit: false,
      hiringFlow: false
    });
  };

  handleSelectCandidateList = e => {
    this.setState({
      jobDescription: false,
      candidateList: true,
      jobEdit: false,
      hiringFlow: false
    });
  };

  handleSelectJobEdit = e => {
    this.setState({
      jobDescription: false,
      candidateList: false,
      jobEdit: true,
      hiringFlow: false
    });
  };

  handleSelectHiringFlow = e => {
    this.setState({
      jobDescription: false,
      candidateList: false,
      jobEdit: false,
      hiringFlow: true
    });
  };


  // <Switch>
  //   <Route exact path="/jobs/:jobId/view" render={() => <JobView />} />
  //   <Route exact path="/jobs/:jobId/candidates" render={() => <JobSpecificCandidateList />} />
  //   <Route exact path="/jobs/:jobId/edit" render={() => <JobEdit />} />
  // </Switch>

  render() {
    console.log('JOBSSUBCONTAINER is rendering');
    this.props.loggedIn ? this.findJob() : null
    return(
      <div id="job-container">
        <div id="button-row">
          <button class="ui button grey" onClick={this.handleSelectJobDescription}> View Job Post </button>
          <button class="ui button grey" onClick={this.handleSelectCandidateList}> View Applications </button>
          <button class="ui button grey" onClick={this.handleSelectJobEdit}> Edit Job Post</button>
          <button class="ui button grey" onClick={this.handleSelectHiringFlow}> Hiring Flow </button>
        </div>
        {this.state.jobDescription ? <JobDescription /> : null}
        {this.state.candidateList? <ApplicationList  /> : null}
        {this.state.jobEdit? <JobEdit /> : null}
        {this.state.hiringFlow ? <HiringFlow /> : null}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  console.log('state', state);
  return {
    job: state.jobs,
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser.id
  }
};

export default withRouter(connect(mapStateToProps, {currentJob})(JobContainer));
