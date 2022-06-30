import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signin from './Signin';
import Profile from './Profile';

function App() {
  const token = localStorage.getItem('accessToken');

  if(!token) {
    return <Signin />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Profile />
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;