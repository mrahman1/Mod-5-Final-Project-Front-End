import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/user-actions";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    fields: {
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleLogin = event => {
    this.props.login(this.state.fields.email, this.state.fields.password);

  };

  errorMessage = () => {
    if(this.props.currentUser && this.props.currentUser.error){
      return <div class="ui error message"> Error: Invalid username or password </div>
    }
  }


  render(){
    console.log(this.props.currentUser);
    return (
      <div>
        <div class="ui middle aligned center aligned grid">
          <div class="column" id="login-column">
            <h2 class="ui teal image header" id="login-header">
              <img
                class="image"
                alt="trumpet logo"
                src="https://image.flaticon.com/icons/svg/176/176546.svg"
              />
              {this.errorMessage()}
              <div class="content">Log-in to your account</div>
            </h2>

            <form class="ui large form" id="login-form">
              <div class="ui stacked segment">
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

                  <Link to="/jobs">
                  <div
                    class="ui fluid large teal submit button"
                    onClick={this.handleLogin}>
                    Login
                  </div>
                  </Link>

              </div>


            </form>

            <div class="ui message">
              New to us? <Link to="/signup"> Sign Up </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps, { login })(Login);
