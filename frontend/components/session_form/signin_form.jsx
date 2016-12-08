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
  }

  componentDidMount(){

  }

  redirect() {
    this.props.router.push("/");
  }

  update(field){
    return event => this.setState({
      [field]: event.currentTarget.value
    });
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
      </form>
    );
  }

}

export default SignInForm;
