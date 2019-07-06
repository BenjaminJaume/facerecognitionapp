import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div className="row d-flex justify-content-center p-4">
      <div className="col-md-10">
        <h4 className="text-center">
          {
            'This application will detect faces in your pictures. Give it a try.'
          }
        </h4>
        <div className="mt-3 p-3 shadow rounded form">
          <div className="input-group">
            <input type="text" className="form-control center w-75" disabled />
            <div className="input-group-append">
              <button
                className="btn btn btn-primary"
                type="button"
                id="button-addon2"
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
