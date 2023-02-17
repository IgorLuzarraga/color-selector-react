import React from 'react';
//import './App.css';
import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
import ColorPaletteGenerator from './components/colorPaletteGenerator/ColorPaletteGenerator';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Header />
//         <ActiveColorSelection />
//         <ColorPicker />
//         <ColorSelectionName />
//         <SaveColorSelection />
//         <ColorSelectionSavedList />
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Header />
        <ColorPaletteGenerator />
      {/* </heakder> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
