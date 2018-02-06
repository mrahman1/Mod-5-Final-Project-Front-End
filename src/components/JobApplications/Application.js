import React from "react";
import { currentApplication } from "../../actions/app-actions";
import { updateApplicationStage } from "../../actions/app-actions";
import { connect } from "react-redux";

class Application extends React.Component {

  state = {
    stage_id: parseInt(this.props.application.stage_id),
    id: parseInt(this.props.application.id)
  }

  updatedStage = () => {
    let currentIndex = this.props.job.stages.findIndex((stage)=>(stage.id === this.state.stage_id))
    if(currentIndex+1 < this.props.job.stages.length){
      let newStageId = this.props.job.stages[currentIndex+1].id
      return newStageId
    }
}

  handleAdvanceClick = (event) => {
    console.log(this.props)
    this.setState({stage_id: this.updatedStage()})
    this.props.updateApplicationStage({id: this.state.id, stage_id: this.updatedStage()})
  }


  handleRejectClick = (event) => {
    this.setState({stage_id: 1})
    this.props.updateApplicationStage({id: this.state.id, stage_id: 1})

  }

  render() {
    return (
      <tr>
        <td> {this.props.application.candidate.name} </td>
        <td> {this.props.application.stage.name} </td>
        <td>
          <button class="negative ui button" onClick = {this.handleRejectClick} > Reject </button>
          {this.props.job ? <button class="positive ui button" onClick = {this.handleAdvanceClick}> Advance </button> : null}
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
    job: state.jobs,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, { currentApplication, updateApplicationStage })(Application);
