import React from 'react';
import './App.css';


import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Explore from "./Components/Explore";
import Projects from "./Components/Projects";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Explore />
      <Projects />
    </div>
  );
};

export default App;
