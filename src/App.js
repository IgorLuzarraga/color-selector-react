import React from 'react';
//import './App.css';
import Header from './components/header/Header';
import ColorPaletteGenerator from './components/colorPaletteGenerator/ColorPaletteGenerator';


function App() {
  return (
    <div className="App">
        <Header />
        <ColorPaletteGenerator />
    </div>
  );
}

export default App;
