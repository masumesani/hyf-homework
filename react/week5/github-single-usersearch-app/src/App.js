import React from 'react';
import logo from './logo.svg';
import './App.css';
import Root from './Components/Root';

function App() {
  return (
    <div className="App">
      <Root />
    </div>
  );
}

export default App;


// const Router = () => {
//   return (<BrowserRouter>
//       {/* <Route path='/' component={App}></Route> */}
//       <Route path='/SearchResult' component={SearchResult}></Route>
//       {/* <Route path='/dashboard/profile' component={Profile}></Route>      */}
//   </BrowserRouter>
//   )
// }

// export default Router;