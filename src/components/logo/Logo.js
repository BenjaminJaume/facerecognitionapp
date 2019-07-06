import React from 'react';
import Tilt from 'react-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Logo.css';

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt text-center"
        options={{ max: 30 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <FontAwesomeIcon icon={['far', 'grin']} size="6x" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
