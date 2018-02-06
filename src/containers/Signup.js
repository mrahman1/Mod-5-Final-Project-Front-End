import React from "react";
import { connect } from "react-redux";
import { signup } from "../actions/user-actions";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  state = {
    fields: {
      email: "",
      password: "",
      company_id: 1
    }
  };

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSignup = event => {
    this.props.signup(this.state.fields);
  };

  render() {
    //console.log(this.props)
    return (
      <div>
        <div class="ui middle aligned center aligned grid">
          <div class="column" id="signup-column">
            <h2 class="ui teal image header">
              <img
                class="image"
                alt="trumpet logo"
                src="https://image.flaticon.com/icons/svg/176/176546.svg"
              />

              <div class="content">Create an Account</div>
            </h2>

            <form class="ui large form">
              <div class="ui stacked segment">
                <div class="field">
                  <div class="ui left icon input">
                    <i class="privacy icon" />
                    <input
                      type="text"
                      placeholder="Company Key"
                      name="company_id"
                      value={this.state.fields.company_id}
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="ui left icon input">
                    <i class="user icon" />
                    <input
                      onChange={this.handleChange}
                      type="text"
                      placeholder="email"
                      name="email"
                      value={this.state.fields.email}
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="ui left icon input">
                    <i class="lock icon" />
                    <input
                      onChange={this.handleChange}
                      type="password"
                      placeholder="password"
                      name="password"
                      value={this.state.fields.password}
                    />
                  </div>
                </div>
                <div
                  class="ui fluid large teal submit button"
                  onClick={this.handleSignup}
                >
                  Sign Up
                </div>
              </div>

              <div class="ui error message" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps, { signup })(Signup);
