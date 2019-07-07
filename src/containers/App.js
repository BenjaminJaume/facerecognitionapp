import React, { Component } from 'react';
import Particles from 'react-particles-js';
import propsParticles from '../particlesjs-config.json';
import Navigation from '../components/navigation/Navigation';
import Logo from '../components/logo/Logo';
import Rank from '../components/rank/Rank';
import ImageLinkForm from '../components/imagelinkform/ImageLinkForm';
import FaceRecognition from '../components/facerecognition/FaceRecognition';
import SignIn from '../components/signin/SignIn';
import SignUp from '../components/signup/SignUp';
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
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    };
  }

  calculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input-image');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log('topRow', clarifaiFace.top_row * height);
    console.log('bottomRow', height - clarifaiFace.bottom_row * height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  displayFaceBox = box => {
    this.setState({ box: box });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch(error => console.log('Error: ', error));
  };

  onRouteChange = route => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false });
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { imageUrl, box, route, isSignedIn } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={propsParticles} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />

        {route === 'home' ? (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition imageUrl={imageUrl} box={box} />
          </div>
        ) : route === 'signin' ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <SignUp onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
