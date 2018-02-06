import React from "react";
import { connect } from "react-redux";
import {
  editCandidate,
  deleteCandidate
} from "../../actions/candidate-actions";
import { Link } from "react-router-dom";

class CandidateEdit extends React.Component {
  constructor(props) {
    super(props);
    if (props.candidate) {
      this.state = {
        id: props.candidate.id,
        name: props.candidate.name
      };
    } else {
      this.state = {
        id: null,
        name: null
      };
    }
  }

  handleChange = e => {
    if (this.props.candidate) {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleSubmit = event => {
    console.log("hit submit");
    this.props.editCandidate(this.state);
  };

  handleDelete = event => {
    this.props.deleteCandidate(this.props.candidate);
  };

  render() {
    return (
      <div id="edit-candidate-div">
        {/*  <h2> Edit Candidate </h2>
        <div class="ui form">
            <input
              id="job-edit-input"
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button class="positive ui button" onClick={this.handleSubmit}>
              Submit Changes{" "}
            </button>
            </div>
            */}

            <Link to="/candidates">
              <button class="negative ui button" onClick={this.handleDelete}>
                {" "}
                Delete Candidate{" "}
              </button>{" "}
            </Link>

      </div>
    );
  }
}

let mapStateToProps = ({ candidate }) => {
  return { candidate };
};

export default connect(mapStateToProps, { editCandidate, deleteCandidate })(
  CandidateEdit
);
