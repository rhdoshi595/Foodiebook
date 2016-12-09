import React from 'react';
import { Link } from 'react-router';
import NavBar from './nav_bar';

const App = ({ children }) => {
  return (
    <div>
      <NavBar />
      { children }
    </div>
  );
};

export default App;
