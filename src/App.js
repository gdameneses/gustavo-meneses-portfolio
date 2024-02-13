import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import CardDivisor from './components/cardDivisor/CardDivisor'
import Projects from './components/projects/Projects'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <CardDivisor />
      <Projects />
    </div>
  );
}

export default App;
