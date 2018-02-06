import React from "react";
import JobListItem from "./JobListItem";
import JobNew from "./JobNew";
import { connect } from "react-redux";

class JobList extends React.Component{

  state = {
    addNewJob: false
  }

  listJobs = () => {
    if (this.props && this.props.currentUser && this.props.currentUser.candidates) {
      return this.props.currentUser.jobs.map((job, index) => (
        <JobListItem job={job} key={index} />
      ));
    }
  };

  handleAddNewJobClick = (e) => {
    this.setState({addNewJob: !this.state.addNewJob})
  }

  render(){
    console.log(this.props)
  return (
    <div id="jobs-grid">

    <button class="ui yellow button" onClick={this.handleAddNewJobClick} id="new-job-button">Add New Job</button>
    {this.state.addNewJob ? <JobNew/> : null}

      <table class="ui celled table" id="job-table">
        <thead class="ui inverted grey table head" id="job-table-head">
          <tr>
            <th>Job Title</th>
            <th>Created Date</th>
            <th>Status</th>
            <th>Total Applications</th>
          </tr>
        </thead>
        <tbody>{this.listJobs()}</tbody>
      </table>
    </div>
  );
};
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(JobList);
