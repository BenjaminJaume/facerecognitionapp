import React from 'react';
import Tilt from 'react-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Logo.css';

const Logo = () => {
  return (
    <div className="d-flex justify-content-center">
      <Tilt className="Tilt text-center" options={{ max: 30 }}>
        <div className="Tilt-inner">
          Face Recognition App
          <FontAwesomeIcon icon={['far', 'grin']} size="9x" className="pt-3" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
