import React, { Component } from 'react';

import LoginForm from '../LoginForm/LoginForm';
import LoginSuccess from '../LoginSuccess/LoginSuccess';

import './App.scss';

class App extends Component {

  state = {
    logged: false
  }

  loginSuccessHandler = () => this.setState({ logged: true });
  
  render() {
    return (
      <div className="App">
        { this.state.logged ? <LoginSuccess/> : <LoginForm onSuccess={this.loginSuccessHandler} />}
      </div>
    );
  }
}

export default App;