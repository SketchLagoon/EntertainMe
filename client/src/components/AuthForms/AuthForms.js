import React, { Component } from "react";

import API from "../../lib/API";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

class AuthForms extends Component {
  constructor(props){
      super(props);
      this.state={
        redirectToReferrer: false,
        error: "",
        logOrReg: true
      };
  }

  handleLoginSubmit = (email, password) => {
    API.Users.login(email, password)
      .then(response => response.data)
      .then(userObj => {
        this.props.setLoggedUser(userObj.user.id)
        this.setState({
        //   user: userObj.user.id,
          redirectToReferrer: true,
          error: ""
        });
      })
      .catch(err => {
        let message;

        switch (err.response.status) {
          case 401:
            message =
              "Sorry, that email/password combination is not valid. Please try again.";
            break;
          case 500:
            message = "Server error. Please try again later.";
            break;
          default:
            message = "Unknown error.";
        }

        this.setState({ error: message });
      });
  };

  toggleLogReg = () => {
    this.state.logOrReg === true
      ? this.setState({ logOrReg: false })
      : this.setState({ logOrReg: true });
  };

  render() {
    const auth = this.state.logOrReg ? (
      <LoginForm onSubmit={this.handleLoginSubmit} />
    ) : (
      <RegistrationForm />
    )

    return (
      <div className="Home">
        {this.state.error && (
          <div className="row">
            <div className="col">
              <div className="alert alert-danger mb-3" role="alert">
                {this.state.error}
              </div>
            </div>
          </div>
        )}

        {auth}
        <button onClick={this.toggleLogReg}>login / register toggle</button>
      </div>
    )
  }
}

export default AuthForms;
