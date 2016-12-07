import React from 'react';
import SignInForm from './signin_form';
import SignUpForm from './signup_form';

const SessionForm = ({ signedIn, errors, processSignUp, processSignIn, router }) => {
  
  return (
    <div>

      <header>
        <p className="logo">foodiebook</p>
        <SignInForm signedIn={ signedIn } processSignIn={ processSignIn } errors={ errors } router={ router }/>
      </header>

      <section className="signup-container">
        <article className="signup-description">
          <h3>
            Connect with foodies and the world around you on Foodiebook
          </h3>
          <span className="signup-description-item">
            <p><strong>See photos and updates</strong> from friends in News Feed</p>
          </span>
          <span className="signup-description-item">
            <p><strong>Share whats new</strong> in your life on your Timeline</p>
          </span>
          <span className="signup-description-item">
            <p><strong>Find more</strong> of what you are looking for with Facebook Search</p>
          </span>
        </article>

        <SignUpForm signedIn={ signedIn } processSignUp={ processSignUp } errors={ errors } router={ router }/>
      </section>

      <footer>
        <p className="copyright">Foodiebook © 2016</p>
      </footer>

    </div>
  );
}

export default SessionForm;
