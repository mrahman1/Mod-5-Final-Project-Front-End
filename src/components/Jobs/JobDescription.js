import React from "react";
import { connect } from "react-redux";

const JobDescription= props => {
  console.log(props)
  let getCandidates = () => {
    let targetCandidates = props.currentUser.candidates.filter(candidate =>
      candidate.jobs.find(job => job.id === props.job.id)
    );
    return targetCandidates.map(candidate => {
      return candidate.name;
    });
  };


  const display = () => {
    if (props.job && props.currentUser) {
      return (

        <div class="ui centered grid">
            <div class = "fourteen wide column"><h1>{props.job.title}</h1> </div>
            <div class="ten wide column">
              <h2> Position:</h2> {props.job.position}
              <br/>
              <h2> Description: </h2> {props.job.description}
            </div>
            <div class="four wide column">
                <p class="bold"> <b>Field:</b> {props.job.field} </p>
                <br/>
                <p class="bold"> <b>Skills:</b> {props.job.skills} </p>
                <br/>
                <p class="bold"> <b>Education Level:</b> {props.job.education_level} </p>
                <br/>
                <p class="bold"> <b>Employment Type:</b> {props.job.employment_type} </p>

            </div>
          </div>


      );
    } else {
      return null;
    }
  };

  //return <div>{display()}</div>;
  return (
    <div>
      {display()}
    </div>
  )
};

let mapStateToProps = state => {
  return {
    job: state.jobs,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, null)(JobDescription);
