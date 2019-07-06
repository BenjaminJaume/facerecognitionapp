import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Logo from '../components/logo/Logo';
// import ImageLinkForm from '../components/imagelinkform/ImageLinkForm';
// import FaceRecognition from '../components/facerecognition/FaceRecognition';
import './App.css';

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <Navigation />
      <Logo />
      {/* <ImageLinkForm />
      <FaceRecognition />} */}
    </div>
  );
}

export default App;
