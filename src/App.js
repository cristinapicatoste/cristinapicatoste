import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Particles from 'react-particles-js';
import Navbar from './components/Navbar/Navbar';
import Header from './Sections/Header/Header';
import { tsParticles } from "tsparticles";


function App() {

  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    background: {
      color: "#081131"
    },
    backgroundMode: {
      enable: true
    },
    particles: {
      color: {
        value: ["#f67e7d", "#843b62", "#8F0942", "#621940"]
      },
      links: {
        color: "#ffb997",
        enable: true
      },
      move: {
        enable: true,
        speed: 2
      },
      size: {
        value: 3,
        random: {
          enable: true,
          minimumValue: 1
        },
        animation: {
          enable: true,
          speed: 2.5,
          minimumValue: 1
        }
      },
      opacity: {
        value: 0.9,
        random: {
          enable: true,
          minimumValue: 0.4
        }
      }
    }
  });

  return (
    <div className="App">
        <Router>
          <Navbar />
          <Header />
          <Particles />
        </Router>
    </div>
  );
}

export default App;
