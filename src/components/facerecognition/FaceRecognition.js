import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="text-center face-recognition">
      <img
        alt=""
        id="input-image"
        src={imageUrl}
        width="500px"
        height="auto"
        className="p-3"
      />
      <div
        className="bounding-box"
        style={{
          left: box.leftCol,
          right: box.rightCol,
          top: box.topRow,
          bottom: box.bottomRow
        }}
      />
    </div>
  );
};

export default FaceRecognition;
