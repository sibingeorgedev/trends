import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Components/HomePage/Home.js';
import About from './Components/AboutUs/About.js';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />

  </Routes>
  
  );
}

export default App;
