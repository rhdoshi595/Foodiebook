import React from 'react';
import { Link } from 'react-router';

const Greeting = (props) => {

  function signOut()  {
    props.signOut();
    props.router.push('/signin');
  }

  function signedIn(){
    if (props.currentUser) {
      return (
        <span>
          <h2>Hi, {props.currentUser.first_name}!</h2>
          <br />
          <input type="button" value="Log Out" onClick={signOut}/>
        </span>
      );
    }
  }

  return (
    <section>
      {signedIn()}
    </section>
  );

};

export default Greeting;
