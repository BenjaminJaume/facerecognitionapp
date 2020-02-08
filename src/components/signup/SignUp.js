import React from 'react';
import './SignUp.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignUp = () => {
    fetch('https://faceappapi-benjaume.herokuapp.com/signup', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        } else {
          console.log('error');
        }
      });
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="card-signin rounded">
          <div className="card-body">
            <h2 className="card-title text-center mb-3">Sign Up</h2>
            <div className="form-signin">
              <div className="form-label-group py-2">
                <input
                  onChange={this.onNameChange}
                  type="text"
                  id="inputName"
                  className="form-control text-center"
                  placeholder="Name"
                  required
                />
              </div>

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
                onClick={this.onSubmitSignUp}
                className="btn btn-primary btn-block text-uppercase"
                type="submit"
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

export default SignUp;
