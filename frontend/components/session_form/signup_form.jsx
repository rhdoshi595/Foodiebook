import React from 'react';
import merge from 'lodash/merge';

class SignUpForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthdayMonth: '',
      birthdayDay: '',
      birthdayYear: '',
      birthday: '',
      gender: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  redirect() {
    this.props.router.push('/');
  }

  handleSubmit(event){
    event.preventDefault();
    let user = merge({}, this.state);
    user = Object.assign({}, this.state,
                        {birthday: new Date(this.state.birthdayYear,
                                            this.state.birthdayMonth,
                                            this.state.birthdayDay)});
    this.props.processSignUp(user).then(() => this.redirect());
  }

  update(field){
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  months() {
    return {
      1: 'Jan',
      2: 'Feb',
      3: 'Mar',
      4: 'Apr',
      5: 'May',
      6: 'Jun',
      7: 'Jul',
      8: 'Aug',
      9: 'Sep',
      10: 'Oct',
      11: 'Nov',
      12: 'Dec'
    };
  }

  days() {
    let days = [];
    for(let i = 1; i <= 31; i++ ) {
      days.push(i);
    }
    return days;
  }

  years() {
    let years = [];
    const thisYear = new Date().getFullYear();
    for (let i = thisYear; i >= 1905; i-=1) {
      years.push(i);
    }
    return years;
  }

  render(){
    let errors;
    if(this.props.errors){
      errors = this.props.errors.map((error, index) => {
      return (<li key={index}>{error}</li>);
    });
    }
    return(
      <section className="signup-form-container group">
        <h2>Sign Up</h2>
        <h4>Its free and always will be</h4>
        <form className="signup-form" onSubmit={ this.handleSubmit }>

          <ul className="error-messages-signup">
            {errors}
          </ul>

          <input type="text" name="first_name"
              value={this.state.first_name}
              onChange={this.update("first_name")}
              placeholder="First name"
          />

          <input type="text" name="last_name"
              value={this.state.last_name}
              onChange={this.update("last_name")}
              placeholder="Last name"
          />

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

        <label className="birthday">Birthday
            <section className="birthday-dropdown-menu">

              <select onChange={this.update('birthdayMonth').bind(this)} value={this.state.birthdayMonth}>
                  <option value="0">Month</option>
                  {
                    Object.keys(this.months()).map( n => (
                      <option key={n} value={n}>{this.months()[n]}</option>
                    ))
                  }
              </select>

              <select onChange={this.update('birthdayDay').bind(this)} value={this.state.birthdayDay}>
                  <option value="0">Day</option>
                  {
                    this.days().map( n => (
                      <option key={n} value={n}>{n}</option>
                    ))
                  }
              </select>

              <select onChange={this.update('birthday_year').bind(this)} value={this.state.birthday_year}>
                  <option value="0">Year</option>
                    {
                      this.years().map( n => (
                        <option key={n} value={n}>{n}</option>
                      ))
                    }
              </select>

            </section>
          </label>

          <br/>
          <br/>

          <div className="gender-radio-buttons group">
            <label className="radio-inline">
                <input type="radio" checked={this.state.gender === 'male'} value="male" onChange={this.update('gender').bind(this)} /> Male
            </label>
            <label className="radio-inline">
                <input type="radio" checked={this.state.gender === 'female'} value="female" onChange={this.update('gender').bind(this)} /> Female
            </label>
          </div>

          <div className="signup-submit-section">
            <input
              className="signup-button"
              type="submit"
              value="Sign up"
            />
          </div>
        </form>
      </section>
    );
  }
}

export default SignUpForm;
