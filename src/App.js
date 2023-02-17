import React from 'react';
//import './App.css';
import ActiveColorSelection from './components/activeColorSelection/ActiveColorSelection';
import ColorPicker from './components/colorPicker/ColorPicker';
import ColorSelectionSavedList from './components/colorSelectionSavedList/ColorSelectionSavedList'
import SaveColorSelection from './components/saveColorSelection/SaveColorSelection';
import ColorSelectionName from './components/colorSelectionName/ColorSelectionName';
import Header from './components/header/Header';
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
      <header className="App-header">
        <Header />
        <ColorPaletteGenerator />
      </header>
    </div>
  );
}

export default App;
