import React from 'react';
import './Rank.css';

const Rank = () => {
  return (
    <div className="pt-3 text-center text-white">
      <div className="rank">
        <h2>
          {'Ben, your current rank is '}
          <span className="display-rank">{`#5`}</span>
        </h2>
      </div>
    </div>
  );
};

export default Rank;
