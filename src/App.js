import React, { useState, useEffect } from "react";
import "./App.css";
import JobDetails from "./components/JobDetails.js";
import Home from "./Home.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App container">
        <div className="row mt-3 mb-3">
          <div className="col-12">
            <strong>Github</strong> Jobs
          </div>
        </div>

        <Switch>
        <Route path="/job/:id" exact>
          <JobDetails />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>

      <footer className="text-center m-6">
        Ahmad Iqbal Hafizi @ DevChallenges.io
      </footer>
      </div>
    </Router>
  );
}

export default App;
