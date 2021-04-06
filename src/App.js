import { BrowserRouter as Router } from "react-router-dom";
import Particles from 'react-particles-js';
import Navbar from './components/Navbar/Navbar';
import Header from './Sections/Header/Header';
import Social from "./components/Social/Social";
import { Slider } from "./components/Slider/Slider";

function App() {

  return (
    <div className="App">
        <Router>
          <Navbar />
          <Social />
          <Slider />
          {/* <Header /> */}
          <Particles />
        </Router>
    </div>
  );
}

export default App;
