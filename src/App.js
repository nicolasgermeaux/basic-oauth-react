import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
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
        <Routes>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;