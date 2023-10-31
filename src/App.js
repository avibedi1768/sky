// import logo from './logo.png';
import './App.css';
import Home from './MyComponents/jsx/Home'
import About from './MyComponents/jsx/About';
import Navbar from './MyComponents/jsx/Navbar'
import ParticlesBg from './MyComponents/jsx/ParticlesBg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ParticlesBg />
      <Home />
      <About />
    </div>
  );
}

export default App;
