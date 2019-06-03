import React from 'react';

import PollList from './Components/PollList';

function App() {
  return (
    <div className="App">
      <p>
        <h1>Latest Polls</h1><div style={{ opacity: '.3' }}>Last updated 6 hours ago</div>
      </p>
      <div>
        <PollList />
      </div>
    </div>
  );
}

export default App;
