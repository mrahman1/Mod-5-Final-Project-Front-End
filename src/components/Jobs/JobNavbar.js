import React from "react";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const JobNavbar = props => {

  return (
    <div class="ui tabular menu" id="job-navbar">
      <h2> <div class="item"> {props.job ? props.job.title : null} </div> </h2>
      <div class="right menu">
        <Link to= {props.job ? `/jobs/${props.job.id}/view` : "/jobs"} className="item"> Details </Link>
        <Link to={props.job ? `/jobs/${props.job.id}/candidates` : "/jobs"} className="item"> Candidates </Link>
        <Link to={`/jobs/${props.job.id}/edit`} className="item"> Edit Job </Link>
      </div>
    </div>
  );
};


let mapStateToProps = ({jobs}) => {
  return {job: jobs}
}

export default connect(mapStateToProps)(JobNavbar);
