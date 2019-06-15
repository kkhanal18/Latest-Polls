import React from "react";
// import PollList from './Components/PollList';
import Polls from "./Components/PollsList";
import PollPage from "./Components/PollPage";
import Navbar from "./Components/Navbar";
import ButtonBar from "./Components/ButtonBar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { Provider } from './context'

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container">
        <p style={{ opacity: ".3" }}>Last updated 6 hours ago</p>
        <ButtonBar />

        <Switch>
          <Route exact path="/" component={Polls} />
          <Route exact path="/polls/:id" component={PollPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
