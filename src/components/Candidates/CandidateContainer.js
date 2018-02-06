import React from "react";
import CandidateList from './CandidateList'
import CandidateView from './CandidateView'
import CandidateNew from './CandidateNew'


class CandidateContainer extends React.Component {

  state = {
    addNewCandidate: false
  }

  handleOnClick = (e) => {
    this.setState({addNewCandidate: !this.state.addNewCandidate})
  }

  render() {

    return (
      <div id="candidate-container">

        <div id="candidate-container-left">
          <h2> Candidates </h2>
          <button class="ui yellow button" onClick={this.handleOnClick}>Add New Candidate</button>
          <CandidateList/>
        </div>

        <div id="candidate-container-right">
          {this.state.addNewCandidate ? <CandidateNew handleOnClick={this.handleOnClick}/> : <CandidateView/>}
        </div>

      </div>
    );
  }
}



export default CandidateContainer;
