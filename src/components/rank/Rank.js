import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
  return (
    <div className="pt-3 text-center text-white">
      <div className="rank">
        <h2>
          {`${name}, your current entry count is `}
          <span className="display-rank">{entries}</span>
        </h2>
      </div>
    </div>
  );
};

export default Rank;
