import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="nav-style p-2">
        <button
          className="btn btn-danger mr-2"
          type="submit"
          onClick={() => onRouteChange('signout')}
        >
          Sign Out
        </button>
      </nav>
    );
  } else {
    return (
      <nav className="nav-style p-2">
        <button
          className="btn btn-primary mr-2"
          type="submit"
          onClick={() => onRouteChange('signin')}
        >
          Sign In
        </button>
        <button
          className="btn btn-success"
          type="submit"
          onClick={() => onRouteChange('signup')}
        >
          Sign Up
        </button>
      </nav>
    );
  }
};

export default Navigation;
