import React from "react";
import { connect } from "react-redux";
import { addCandidate } from "../../actions/candidate-actions";

class CandidateNew extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    if (props.currentUser) {
      this.state = {
        user_id: props.currentUser.id,
        name: "",
        work_experience: "",
        education: "",
        phone: "",
        email: ""
      };
    } else {
      this.state = {
        user_id: "",
        name: "",
        work_experience: "",
        education: "",
        phone: "",
        email: ""
      };
    }
  }

  handleChange = event => {
    if (this.props.currentUser) {
      this.setState({
        [event.target.name]: event.target.value,
        user_id: this.props.currentUser.id
      });
    }
  };

  handleSubmit = event => {
    this.props.addCandidate(this.state);
    this.props.handleOnClick();
  };

  render() {
    console.log(this.props);
    return (
      <div id="new-candidate-div">
        <h1> Add New Candidate </h1>
        <div id="new-candidate-segment" class="ui inverted segment">
          <div id="new-candidate-form" class="ui inverted big form">
            <div class="field">
              <input
                type="text"
                placeholder="New Candidate Name"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
            </div>

            <div class="field">
              <input
                type="text"
                placeholder="email address"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            </div>

            <div class="field">
              <input
                type="text"
                placeholder="phone number"
                value={this.state.phone}
                name="phone"
                onChange={this.handleChange}
              />
            </div>

            <div class="field">
              <input
                type="text"
                placeholder="education"
                value={this.state.education}
                name="education"
                onChange={this.handleChange}
              />
            </div>

            <div class="field">
              <input
                type="text"
                placeholder="work experience"
                value={this.state.work_experience}
                name="work_experience"
                onChange={this.handleChange}
              />
            </div>

            <div class="ui button" onClick={this.handleSubmit}>
              {" "}
              Submit{" "}
            </div>
          </div>
        </div>



      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, { addCandidate })(CandidateNew);
