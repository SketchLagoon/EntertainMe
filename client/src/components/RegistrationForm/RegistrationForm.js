import React, { Component } from 'react';
import { Users } from '../../lib/API';

import Octicon, { Mail, Key } from '@githubprimer/octicons-react';

class RegistrationForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleRegistrationSubmit = event => {
    const { email, password} = this.state;

    Users.create(email, password)
    .then(response => response.data)

    event.preventDefault();
  }

  render() {
    const { email, password} = this.state;

    return (
      <div className='LoginForm'>
          <h2>REGISTER</h2>
        <div className='card'>
          <div className='card-body'>
            <form onSubmit={this.handleRegistrationSubmit}>
              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text"><Octicon icon={Mail} /></span>
                </div>
                <input
                  className='form-control'
                  id='email'
                  type='email'
                  name='email'
                  placeholder='email@provider.com'
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text"><Octicon icon={Key} /></span>
                </div>
                <input
                  className='form-control'
                  id='password'
                  type='password'
                  name='password'
                  placeholder='password'
                  value={password}
                  onChange={this.handleInputChange}
                />
              </div>

              <button className='btn btn-primary' type='submit'>Register Now!</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationForm;