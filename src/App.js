import React from 'react';
//import './App.css';
import ActiveColorSelection from './components/activeColorSelection/ActiveColorSelection';
import ColorPicker from './components/colorPicker/ColorPicker';
import ColorSelectionSavedList from './components/colorSelectionSavedList/ColorSelectionSavedList'
import SaveColorSelection from './components/saveColorSelection/SaveColorSelection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ActiveColorSelection />
        <ColorPicker />
        <SaveColorSelection />
        <ColorSelectionSavedList />
      </header>
    </div>
  );
}

export default App;