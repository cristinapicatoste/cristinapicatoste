import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Header from './Sections/Header/Header';

function App() {
  return (
    <div className="App">
      <div className='app-container'>  
        <Router>
          <Navbar />
          <Header />
        </Router>
      </div>
    </div>
  );
}

export default App;
