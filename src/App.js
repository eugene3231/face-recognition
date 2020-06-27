import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';
import 'tachyons';

const particleOptions = {
    particles: {
      "move": {
        "enable": true,
        "speed": 8,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      },
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        }
      }
    }
}

function App() {
  return (
    <div className="App">
      <Particles className='particles'
        params={particleOptions} />
    <Navigation />
    <Logo />
    <Rank />
    <ImageLinkForm />
    {/*<FaceRecognition>} */}
    </div>
    );
  }
  
  export default App;
  