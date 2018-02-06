import React from "react";
import { connect } from "react-redux";
import CandidateEdit from './CandidateEdit'

const CandidateView = props => {
  const display = () => {
    if (props.candidate) {
      return (
        <div id="resume">
          <div id="resume-header">
            <p id="resume-name">{props.candidate.name}</p>
            <a href="mailto:you@yourdomain.com">
              <p id="resume-email">{`${props.candidate.name}@trumpet.com`}</p>
            </a>
          </div>
          <div class="resume-left" />
          <div class="resume-right">
            <h4>Objective</h4>
            <p>To take a position as a software engineer.</p>
            <h4>Experience</h4>
            <p>{props.candidate.work_experience}</p>

            <h4>Skills</h4>
            <p>Languages: C#, JavaScript, Python, Ruby</p>
            <p>Frameworks: .NET, Node.js, Django, Ruby on Rails</p>
            <h4>Education</h4>
            <p>{props.candidate.education}</p>
            <ul>
              <li>Award for best senior thesis</li>
              <li>GPA: 3.8</li>
            </ul>
          </div>
          <div id="resume-footer">
            <p>
              Email: {`${props.candidate.name}@trumpet.com`} | Tel: (555) 555-5555
            </p>
          </div>
          <CandidateEdit/>
        </div>
      );
    } else {
      return null;
    }
  };

  return <div>{display()}</div>;
};

let mapStateToProps = ({ candidate }) => {
  return { candidate };
};

export default connect(mapStateToProps, null)(CandidateView);
