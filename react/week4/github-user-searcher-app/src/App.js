import React, { useState } from 'react';
import './App.css';
import Root from './Components/Root';
import Context from './DefaultContext';

function App() {
  const [searchToken, setSearchToken] = useState('');
  const [status, setStatus] = useState('');
  const [searchType, setSearchType] = useState('namesearch');
  return (
    <div className="App">
      <Context.Provider value={{
        searchToken, setSearchToken,
        status, setStatus,
        searchType, setSearchType
      }}>
        <Root />
      </Context.Provider>
    </div>
  );
}

export default App;
