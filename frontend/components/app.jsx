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
          <strong className="main-left-title">Links</strong>
          <ul className="main-left-mainlinks">
            <a href="https://rhdoshi595.github.io/portfolio/">
              <li><i className="material-icons">portrait</i> Portfolio Site</li>
            </a>
            <a href="https://github.com/rhdoshi595">
              <li><i className="material-icons">code</i> Github</li>
            </a>
            <a href="https://www.linkedin.com/in/rahul-doshi-2b1a53132">
              <li><i className="material-icons">work</i> LinkedIn</li>
            </a>
            <a href="https://rhdoshi595.github.io/Snake-with-jUtility/">
              <li><i className="material-icons">gamepad</i> Snake Demo of jUtility</li>
            </a>
            <a href="https://rhdoshi595.github.io/Helicopter/">
              <li><i className="material-icons">gamepad</i> Saving Nemo</li>
            </a>
          </ul>
        </div>
        <div className="main-body-content">
          <PostIndexContainer userId=""/>
        </div>
        <div className="main-body-right">
          <div className="body-right-col">
            <strong className="main-left-title">Sponsored Posts</strong>
            <a href="https://github.com/rhdoshi595/Foodiebook">
              <img src="https://s3.amazonaws.com/foodiebook-pro/images/github-logo-ad.jpg" target="_blank" />
              <strong id="main-right-title">Project Github</strong>
            </a>
            <p className="main-right-p">Check out the Foodiebook's source code. Peer at the docs! Prepare to be amazed!!</p>


            <strong className="main-right-title">Built With:</strong>
            <br/>
            <ul className="built-with">
              <li>React</li>
              <li>Redux</li>
              <li>JavaScript</li>
              <li>Ruby</li>
              <li>Rails</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </section>
      { children }
    </div>
  );
};

export default App;
