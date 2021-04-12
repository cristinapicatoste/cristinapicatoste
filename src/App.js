import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Social from "./components/Social/Social";
import { Slider } from "./components/Slider/Slider";

import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";

import * as route from './routes/routes';
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";

function App() {

  const mql = window.matchMedia('(max-width: 540px)');

  return (
    <div className="App">
      <Router>

        {mql ? <NavbarMobile /> : <Navbar />}
        {/* <Navbar /> */}
        <Social />
        <Switch>
          <Route exact path={route.HOME} component={Slider} />
          <Route exact path={route.PORTFOLIO} component={Portfolio} />
          <Route exact path={route.ABOUT} component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
