import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Users } from '../../lib/API';

import Home from '../../pages/Home/Home';

// import Register from '../../pages/Register/Register';

// import NotFound from '../../pages/NotFound/NotFound';


class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = (user) => {
      this.setState(prevState => ({ auth: { ...prevState.auth, user } }));
    };

    this.handleLogout = () => {
      this.setState(prevState => ({ auth: { ...prevState.auth, user: undefined} }));
    }

    this.state = {
      auth: {
        user: undefined,
        onLogin: this.handleLogin,
        onLogout: this.handleLogout
      }
    }
  }

  render() {
    return (
        <div className='App'>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              {/* <Route component={NotFound} /> */}
            </Switch>
          </div>
        </div>
    );
  }
}

export default App;
