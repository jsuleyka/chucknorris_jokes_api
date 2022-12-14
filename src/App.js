import React from "react";
import "./App.css";
import CHLogo from './components/CNLogo';
import JokeProvider from './contexts/JokeProvider';
import SelectOption from './components/SelectOption';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <CHLogo />
      <h1>Chuck Norris Jokes</h1>
      <JokeProvider>
        <Main />
        <SelectOption />
      </JokeProvider>
    </div>
  );
}

export default App;
