import React from 'react';
import './SignUp.css';

const SignUp = ({ onRouteChange }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card-signin rounded">
        <div className="card-body">
          <h2 className="card-title text-center mb-3">Sign Up</h2>
          <form className="form-signin">
            <div className="form-label-group py-2">
              <input
                type="text"
                id="inputName"
                className="form-control text-center"
                placeholder="Name"
                required
              />
            </div>

            <div className="form-label-group">
              <input
                type="email"
                id="inputEmail"
                className="form-control text-center"
                placeholder="Email"
                required
              />
            </div>

            <div className="form-label-group py-2">
              <input
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
              onClick={() => onRouteChange('home')}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
