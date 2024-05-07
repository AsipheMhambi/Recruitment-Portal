// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Home Page/NavBar';
import Body from './components/Home Page/Body';
import SignIn from './components/Sign-In/Sign-In';
import './Home.css';

const App = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/Sign-In" element={<SignIn />} />
        </Routes>  
        <Body />
    </Router>
  );
};

export default App;
