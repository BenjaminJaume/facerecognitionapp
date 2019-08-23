import React from 'react';
import './SignIn.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="d-flex justify-content-center">
        <div className="card-signin rounded">
          <div className="card-body">
            <h2 className="card-title text-center mb-3">Sign In</h2>
            <div className="form-signin">
              <div className="form-label-group">
                <input
                  onChange={this.onEmailChange}
                  type="email"
                  id="inputEmail"
                  className="form-control text-center"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="form-label-group py-2">
                <input
                  onChange={this.onPasswordChange}
                  type="password"
                  id="inputPassword"
                  className="form-control text-center"
                  placeholder="Password"
                  required
                />
              </div>

              <button
                className="btn btn-primary btn-block text-uppercase"
                type="submit"
                onClick={this.onSubmitSignIn}
              >
                Sign in
              </button>

              <button
                className="btn btn-success btn-block text-uppercase"
                type="submit"
                onClick={() => onRouteChange('signup')}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
