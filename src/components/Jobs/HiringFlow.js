import React from "react";
import { connect } from "react-redux";
import { addHiringStage } from "../../actions/job-actions";

class HiringFlow extends React.Component {
  state = {
    stage_name: "",
    job_id: this.props.job.id,
    user_id: this.props.currentUser.id
  };

  handleChange = e => {
    console.log(this.previousState)
    this.setState({ [e.target.name]: e.target.value })
  };

  handleClick = e => {
    this.props.addHiringStage(this.state);
  this.setState({stage_name: ""})
  };

  displayStages = () => {
      return (this.props.job.stages.map(stage =>
        <div class="large item">
        <i class="large angle double down middle aligned icon" />
        <div class="content">
          <a class="header">{stage.name}</a>
        </div>
      </div>)
    )
  };
  render() {
    console.log(this.state);
    return (
      <div id="hiring-flow-div">
      <h2> Hiring Flow for {this.props.job.title}</h2>
        <div class="ui huge relaxed divided list">
          {this.props.job.stages ? this.displayStages() : null}
        </div>

        <div class="ui huge icon input">
          <input
            type="text"
            placeholder="ie Pre-Screen"
            value={this.state.stage_name}
            onChange={this.handleChange}
            name="stage_name"
          />
        </div>
        <button class="ui huge blue button" onClick={this.handleClick}>
          {" "}
          Add Stage{" "}
        </button>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    job: state.jobs,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, { addHiringStage })(HiringFlow);
