import React from 'react';
import './App.css';
import Root from './Components/Root';
import GitHubSearchProvider from './Components/GitHubSearchProvider';

function App() {

  return (
    <div className="App">
      <GitHubSearchProvider>
        <Root />
      </GitHubSearchProvider>
    </div>
  );
}

export default App;
