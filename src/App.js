import React from 'react';
import BabylonView from './components/BabylonView';
import MainMenu from './pages/MainMenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <BabylonView />
      </div>
      
      <div class="ui">
        <MainMenu />
      </div>
    </div>
  );
}

export default App;
