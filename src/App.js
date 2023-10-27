// import logo from './logo.png';
import './App.css';
import Home from './MyComponents/jsx/Home'
import About from './MyComponents/jsx/About';
import Navbar from './MyComponents/jsx/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
