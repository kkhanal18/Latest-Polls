import Navbar from "./Components/Navbar/Navbar";
import PollHome from "./Containers/PollHome";
import PollPage from "./Components/PollPage/PollPage";
import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <p id="update-label">Last updated 6 hours ago</p>
        <Switch>
          <Route exact path="/" component={PollHome} />
          <Route exact path="/polls/:id" component={PollPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
