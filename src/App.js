import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <div>
      <Header/>
      <Route exact path="/"
      component={CharacterList}
      />
      <Route exact path="/welcome"
         component={WelcomePage}
      />
      <Route exact path="/characters/:id"
        component={CharacterData}
      />
    </div>
  );
}
