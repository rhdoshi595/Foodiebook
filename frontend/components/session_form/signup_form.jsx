import React from 'react';
import merge from 'lodash/merge';

class SignUpForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  redirect() {
    this.props.router.push('/');
  }

  handleSubmit(event){
    event.preventDefault();
    let user = merge({}, this.state);
    this.props.processSignUp(user).then(() => this.redirect(), (error) => console.log(error));
  }

  update(field){
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  render(){
    let errors;
    if(this.props.errors){
      errors = this.props.errors.map((error, index) => {
      return (<li key={index}>{error}</li>);
    });
    }
    return(
      <section className="signup-container">
        <h2>Sign Up</h2>
        <h4>Its free and always will be</h4>
        <form className="signup-form" onSubmit={ this.handleSubmit }>

          <ul className="error-messages-signup">
            {errors}
          </ul>

          <input type="text" name="email"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="email"
          />

          <input type="text" name="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="New password"
          />

          <input
              className="signup-button"
              type="submit"
              value="Sign up"
          />
        </form>
      </section>
    );
  }
}

export default SignUpForm;
