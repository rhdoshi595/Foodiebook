import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => {
  return (<div>
    <h1>Foodiebook</h1>
    { children }
  </div>);
};

export default App;
