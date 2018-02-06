import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Homepage from "../components/Homepage";

import Login from "./Login.js";
import Signup from "./Signup.js";

import JobList from "../components/Jobs/JobList";
import JobContainer from "../components/Jobs/JobContainer";

import CandidateContainer from "../components/Candidates/CandidateContainer";
import CandidateNew from "../components/Candidates/CandidateNew";


class Main extends React.Component {
  render() {
    console.log('MAIN is rendering');
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />

          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/signup" render={() => <Signup />} />

          <Route exact path="/jobs" render={() => <JobList />} />
          <Route exact path="/jobs/:jobId" render={() => <JobContainer />} />


          <Route exact path="/candidates" render={() => <CandidateContainer />} />
          <Route exact path="/candidates/new" render={() => <CandidateNew/>} />


        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
