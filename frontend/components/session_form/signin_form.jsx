import React from 'react';
import merge from 'lodash/merge';

class SignInForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }

  redirect() {
    this.props.router.push("/");
  }

  update(field){
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  demo(e){
    e.preventDefault();
    const demoUser = {email: 'bob@bobsburgers.com', password: '123456'};
    this.props.processSignIn(demoUser).then(() => this.redirect());
  }

  handleSubmit(event){
    event.preventDefault();
    let user = merge({}, this.state);
    this.props.processSignIn(user).then(() => this.redirect(), (error) => console.log(error));
  }

  render(){
    let errors;
    if(this.props.errors){
      errors = this.props.errors.map((error, index) => {
        return (<li key={index}>{error}</li>);
      });
    }
    return (
      <form className="signin-form" onSubmit={ this.handleSubmit }>
        <ul className="error-messages-signin">
          {errors}
        </ul>

        <div className="signin-input-item">
          <label>Email
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.update("email")}
              />
          </label>
        </div>

        <div className="signin-input-item">
        <label>Password
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.update("password")}
            />
        </label>
        </div>

        <div className="signin-input-item signin-button">
          <button type="submit" name="submit">Log In</button>
        </div>

        <div className="signin-input-item guest-button">
          <button className="guest-signin-button" onClick={ this.demo }>Guest Login</button>
        </div>
      </form>
    );
  }

}

export default SignInForm;
