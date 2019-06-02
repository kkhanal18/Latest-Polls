import React from 'react';
import './App.css';

import PollList from './Components/PollList';

function App() {
  return (
    <div className="App">
      <h1>Latest Polls</h1>
      <div>
        <PollList />
      </div>
    </div>
  );
}

export default App;
