import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import { Route } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage";

function App() {

  return (
    <main>

     <Header />
      <Route exact path="/character/" component={CharacterList}/>
      <Route exact path="/" component={WelcomePage}/> 
  </main>
  );
}

export default App;
