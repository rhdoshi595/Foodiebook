import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => {
  return (
    <div>
      <GreetingContainer/>
      { children }
    </div>
  );
};

export default App;
