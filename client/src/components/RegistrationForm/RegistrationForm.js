import React, { Component } from "react";
import { Users } from "../../lib/API";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 250px;
  padding: 8px 12px;
  margin: 8px 0;
  font-size: 16px;
  border-style: solid;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.33);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.66);
  color: #2193b0;
  font-weight: 400;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  &:focus {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const StyledInput = styled.input`
  width: 220px;

  padding: 8px 12px;
  margin: 8px 0;

  background: rgba(0, 0, 0, 0);
  color: white;
  font-size: 18px;

  border-style: solid;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.45);
  border-radius: 5px;

  outline: none;

  transition: border-color 0.5s;

  &::placeholder {
    color: rgba(255, 255, 255, 0.45);
    transition: color 0.5s;
    font-weight: 400;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.66);
    transition: border-color 0.5s;

    &::placeholder {
      color: rgba(255, 255, 255, 0.66);
      transition: color 0.5s;
    }
  }

  &:focus {
    border-color: rgba(255, 255, 255, 0.99);
    transition: border-color 0.5s;
    filter: drop-shadow(0 0 0.75rem rgba(255, 255, 255, 0.5));

    &::placeholder {
      color: rgba(255, 255, 255, 0);
      transition: color 0.5s;
    }
  }
`;

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    password: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleRegistrationSubmit = event => {
    const { email, password } = this.state;

    Users.create(email, password).then(response => response.data);

    this.props.toggleLogReg();
    event.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    
    return (
      <StyledForm onSubmit={this.handleRegistrationSubmit}>
        <StyledInput
          id="email"
          type="email"
          name="email"
          placeholder="email@provider.com"
          value={email}
          onChange={this.handleInputChange}
        />

        <StyledInput
          id="password"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={this.handleInputChange}
        />

        <StyledButton type="submit">REGISTER</StyledButton>
      </StyledForm>
    );
  }
}

export default RegistrationForm;
