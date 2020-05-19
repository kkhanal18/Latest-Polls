import Navbar from "./Components/Navbar/Navbar";
import PollHome from "./Containers/PollHome";
import PollPage from "./Components/PollPage/PollPage";
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <p style={{ opacity: ".3" }}>Last updated 6 hours ago</p>
        <Switch>
          <Route exact path="/" component={PollHome} />
          <Route exact path="/polls/:id" component={PollPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
