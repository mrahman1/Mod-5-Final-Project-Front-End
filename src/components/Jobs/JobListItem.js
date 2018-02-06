import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { moment } from 'react-moment';
import {currentJob} from "../../actions/job-actions";

const JobListItem = (props) => {

  const handleOnClick = (event) => {
    props.currentJob(props.job)
  }

  return(
    <tr>
        <td><Link to={`/jobs/${props.job.id}`} onClick={handleOnClick}> {props.job.title} </Link></td>
        <td> {props.job.formattedTime}</td>
        <td> {props.job.status} </td>
        <td id="job-app-count"> {props.job.application_ids ? props.job.application_ids.length: 0} </td>
    </tr>
  )
}

export default connect(null, {currentJob})(JobListItem);
