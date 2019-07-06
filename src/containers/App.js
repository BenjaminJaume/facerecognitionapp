import React from 'react';
import Particles from 'react-particles-js';
import propsParticles from '../particlesjs-config.json';
import Navigation from '../components/navigation/Navigation';
import Logo from '../components/logo/Logo';
import Rank from '../components/rank/Rank';
import ImageLinkForm from '../components/imagelinkform/ImageLinkForm';
// import FaceRecognition from '../components/facerecognition/FaceRecognition';
import './App.css';

function App() {
  return (
    <div className="App">
      <Particles className="particles" params={propsParticles} />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition />} */}
    </div>
  );
}

export default App;
