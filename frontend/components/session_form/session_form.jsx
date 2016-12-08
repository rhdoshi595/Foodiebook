import React from 'react';
import SignInForm from './signin_form';
import SignUpForm from './signup_form';

const SessionForm = ({ signedIn, errors, processSignUp, processSignIn, router }) => {

  return (
    <div className="session-body">

      <header className="signin-header">
        <span className="signin-container">
          <p className="logo">foodiebook</p>
          <SignInForm signedIn={ signedIn } processSignIn={ processSignIn } errors={ errors } router={ router }/>
        </span>
      </header>

      <section className="signup-info-container group">
        <div className="signup-info">

          <article className="signup-info-description">
            <h3>
              Connect with foodies and the world around you on Foodiebook
            </h3>
            <div className="signup-description-item group">
              <i className="material-icons">web</i>
              <p><strong>See photos and updates</strong> from friends in News Feed</p>
            </div>
            <div className="signup-description-item group">
              <i className="material-icons">forum</i>
              <p><strong>Share whats new</strong> in your life on your Timeline</p>
            </div>
            <div className="signup-description-item group">
              <i className="material-icons">group</i>
              <p><strong>Find more</strong> of what you are looking for with Foodiebook Search</p>
            </div>
          </article>

          <SignUpForm signedIn={ signedIn } processSignUp={ processSignUp } errors={ errors } router={ router }/>

        </div>
      </section>

      <footer>
        <div className="footer-container">
          <p className="copyright">Foodiebook © 2016</p>
        </div>
      </footer>

    </div>
  );
}

export default SessionForm;
