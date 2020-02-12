import React, { Component } from "react";
import styled from "styled-components";

import { Users } from "../../lib/API";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogRegBtn = styled.button`
  margin-top: 2vh;
  border: none;
  background-color: transparent;
  color: rgba(255,255,255,0.5);
  font-size: 14px;

  &:focus{
    color: color: rgba(255,255,255,1);
  }

  &:hover{
    color: rgba(255,255,255,1);
  }
`;

const ErrorText = styled.p`
  margin-bottom: 24px !important;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  color: rgba(255,255,255,0.33)
`

class AuthForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      error: "",
      logOrReg: true
    };
  }

  handleLoginSubmit = (email, password) => {
    Users.login(email, password)
      .then(response => response.data)
      .then(userObj => {
        this.props.setLoggedUser(userObj.user.id, userObj.user.email);
        this.setState({
          redirectToReferrer: true,
          error: ""
        });
      })
      .catch(err => {
        let message;

        switch (err.response.status) {
          case 401:
            message =
              "INVALID LOGIN";
            break;
          case 500:
            message = "SERVER ERROR";
            break;
          default:
            message = "UNKNOWN ERROR";
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
    const auth = this.state.logOrReg ? ( <LoginForm onSubmit={this.handleLoginSubmit} /> ) : ( <RegistrationForm toggleLogReg={this.toggleLogReg}/> );

    return (
      <AuthContainer>
        {this.state.error && ( <ErrorText role="alert"> {this.state.error} </ErrorText> )}
        {auth}
        <LogRegBtn onClick={this.toggleLogReg}>
          {this.state.logOrReg ? "Need to Register?" : "Already have an Account?"}
        </LogRegBtn>
      </AuthContainer>
    );
  }
}

export default AuthForms;
