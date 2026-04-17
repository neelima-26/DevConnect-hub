import React from 'react';
import './App.css';

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;