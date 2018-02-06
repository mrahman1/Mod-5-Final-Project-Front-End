import React, { Component } from 'react';
// import logo from './logo.svg';
import './CSS/App.css';
import Navbar from './containers/Navbar.js'
import Main from './containers/Main.js'

import { connect } from 'react-redux'
import {getCurrentUser} from './actions/user-actions';
import {withRouter} from 'react-router-dom'


class App extends Component {

componentDidMount() {
    console.log('in CDM')
    const token = localStorage.getItem('token');
    if (token) {
      this.props.getCurrentUser()
    }
  }

  render() {
    console.log(this.props)
    return (
          <div>
            <Navbar/>
            <Main/>
          </div>
    );
  }
}

const mapStateToProps = ({currentUser}) => ({
  currentUser
});



export default withRouter(connect(mapStateToProps,{getCurrentUser})(App));
