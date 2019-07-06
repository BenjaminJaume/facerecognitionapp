import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="text-center">
      <img alt="" src={imageUrl} className="img-fluid p-3" />
    </div>
  );
};

export default FaceRecognition;
