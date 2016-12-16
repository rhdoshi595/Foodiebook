import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import PostIndexContainer from './post/post_index_container';

const App = ({ children }) => {
  return (
    <div>
      <GreetingContainer/>
      <section className="main-body group">
        <div className="main-body-left">

        </div>
        <div className="main-body-content">
          <PostIndexContainer userId=""/>
        </div>
        <div className="main-body-right">

        </div>
      </section>
      { children }
    </div>
  );
};

export default App;
