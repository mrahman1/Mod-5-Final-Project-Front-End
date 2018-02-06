import React from "react";
import { connect } from "react-redux";
import {addApplication} from "../../actions/app-actions";

class ApplicationNew extends React.Component {

  constructor(props) {
    super(props);

    if (props.job && props.currentUser.candidates) {
      this.state = {
        candidate_id: "",
        job_id: props.job.id,
        candidate_name: props.currentUser.candidates.length > 0 ? props.currentUser.candidates[0].name : null,
        user_id: props.currentUser.id,
        stage_id: props.job.stages.length > 0 ? props.job.stages[1].id : 2
      };
    } else {
      this.state = {
        candidate_id: null,
        job_id: null,
        candidate_name: "",
        user_id: null,
        stage_id: 2
      };
    }
  }

  handleNewCandidateName = (event) => {
    this.setState({
      candidate_name: event.target.value,
      candidate_id: ""
    })
  }

  handleSelect = event => {
    this.setState({
      candidate_id: event.target.value,
      candidate_name: ""
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addApplication(this.state)
  };

  selectOptions = () => this.props.currentUser.candidates.map((candidate,key)=>(
    <option value={candidate.id}>{candidate.name}</option>
  ));

  render() {
    console.log(this.state)
    return (
      <div id="new-app-div">
        <h4> New Application </h4>
        <label> Enter a New Candidate or Select Existing </label>
        <form class="ui form" onSubmit={this.handleSubmit} id="new-app-form">
          <input
            type = "text"
            placeholder = "name"
            value = {this.state.name}
            onChange = {this.handleNewCandidateName}
          />

          <select class="ui selection dropdown"
            onChange={this.handleSelect}>
              {this.props.currentUser.candidates ? this.selectOptions() : null}
            </select>
          <input class="ui button"
            type = "submit"
            />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    job: state.jobs,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, {addApplication})(ApplicationNew);
