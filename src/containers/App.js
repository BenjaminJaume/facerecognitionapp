import React, { Component } from 'react';
import Particles from 'react-particles-js';
import propsParticles from '../particlesjs-config.json';
import Navigation from '../components/navigation/Navigation';
import Logo from '../components/logo/Logo';
import Rank from '../components/rank/Rank';
import ImageLinkForm from '../components/imagelinkform/ImageLinkForm';
import FaceRecognition from '../components/facerecognition/FaceRecognition';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'a466bb16792d4c3796bf4e2486f3a217'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imageUrl: ''
    };
  }

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    app.models
      .predict('a403429f2ddf4b49b307e318f00e528b', this.state.input)
      .then(
        function(response) {
          console.log(
            response.outputs[0].data.regions[0].region_info.bounding_box
          );
        },
        function(err) {
          // there was an error
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={propsParticles} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
