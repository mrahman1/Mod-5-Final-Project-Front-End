import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/user-actions";

const Navbar = props => {
  console.log(props)
  let display = () => {
    if (props.currentUser && !props.currentUser.error) {
      return (
        <div class="ui green inverted menu" id="navbar">
          <Link to="/">
            <div class="item">
              <img
                alt="trumpet logo"
                src="https://image.flaticon.com/icons/svg/176/176546.svg"
              />
            </div>
          </Link>
          <Link to="/jobs" className="item">
            {" "}
            Jobs{" "}
          </Link>
          <Link to="/candidates" className="item">
            {" "}
            Candidates{" "}
          </Link>

          <div class="right menu">
            <Link to="/" className="item" onClick={props.logout}>
              Logout
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div class="ui green inverted menu" id="navbar">
          <Link to="/">
            <div class="item">
              <img
                alt="trumpet logo"
                src="https://image.flaticon.com/icons/svg/176/176546.svg"
              />
            </div>
          </Link>
          <div class="right menu">
            <Link to="/login" className="item">
              Login
            </Link>
          </div>
        </div>
      );
    }
  };

  return <div>{display()}</div>;
};

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps, { logout })(Navbar);
