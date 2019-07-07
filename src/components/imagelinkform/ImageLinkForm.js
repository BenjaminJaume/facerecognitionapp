import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="d-flex justify-content-center p-4">
      <div className="col-md-8">
        <h3 className="text-center">
          {'This application will detect faces in your pictures.'}
        </h3>
        <h5 className="text-center">{`Paste the URL of your picture below, hit 'Upload' and watch the result`}</h5>
        <div className="mt-3 p-3 shadow rounded form">
          <div className="input-group ">
            <input
              type="text"
              className="form-control input-form"
              onChange={onInputChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn btn-primary upload-button"
                type="button"
                onClick={onButtonSubmit}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
