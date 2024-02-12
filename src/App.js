import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import CardDivisor from './components/cardDivisor/CardDivisor'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <CardDivisor />
    </div>
  );
}

export default App;
