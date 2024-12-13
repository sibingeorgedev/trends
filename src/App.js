import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Components/HomePage/Home.js';
import About from './Components/AboutUs/About.js';
import Contact from './Components/Contact/Contact.js';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
  </Routes>
  
  );
}

export default App;
