import React from 'react'
import {currentCandidate} from "../../actions/candidate-actions";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


const Candidate = (props) => {

    const handleOnClick = (event) => {
      props.currentCandidate(props.candidate)
    }


  return(
    <tr>
      <td><Link to={`/candidates`} onClick={handleOnClick}> {props.candidate.name} </Link></td>
    </tr>
  )
}


export default connect(null, {currentCandidate})(Candidate);
