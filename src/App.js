import React from 'react';
// import PollList from './Components/PollList';
import Polls from './Components/Polls'

import { Provider } from './context'


function App() {
  return (
    <Provider>
      <div className="App">
        <h1>Latest Polls</h1><p style={{ opacity: '.3' }}>Last updated 6 hours ago</p>
        <Polls />

      </div>
    </Provider>
  );
}

export default App;
