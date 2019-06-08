import React from 'react';
// import PollList from './Components/PollList';
import Polls from './Components/Polls'
import PollPage from './Components/PollPage'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// import { Provider } from './context'


function App() {
  return (
    <Router>

      <h1>Latest Polls</h1><p style={{ opacity: '.3' }}>Last updated 6 hours ago</p>
      <Switch>
        <Route exact path="/" component={Polls} />
        <Route exact path="/polls/:id" component={PollPage} />



      </Switch>



    </Router>

  );
}

export default App;
