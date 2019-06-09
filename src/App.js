import React from 'react';
// import PollList from './Components/PollList';
import Polls from './Components/PollsList'
import PollList from './Components/PollPage'
import Navbar from './Components/Navbar'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// import { Provider } from './context'


function App() {
  return (

    <Router>
      <Navbar />


      <div className="container">
        <p style={{ opacity: '.3' }}>Last updated 6 hours ago</p>



        <Switch>
          <Route exact path="/" component={Polls} />
          <Route exact path="/polls/:id" component={PollList} />
        </Switch>
      </div>



    </Router>

  );
}

export default App;
