// import logo from './logo.png';
import './App.css';
import Home from './MyComponents/jsx/Home'
import About from './MyComponents/jsx/About';
import Navbar from './MyComponents/jsx/Navbar'
import ParticlesBg from './MyComponents/jsx/ParticlesBg';
import Product from './MyComponents/jsx/Product';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="particles-container">
        <ParticlesBg />
        <Home />
      </div>
      <About />
      <Product />
    </div>
  );
}

export default App;
