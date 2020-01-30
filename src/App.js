import React, { useEffect, useState} from "react";
import axios from 'axios';
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import WelcomePage from "./components/WelcomePage";
import IndividualCharacter from "./components/IndividualCharacter.js";
import SearchForm from "./components/SearchForm.js";

export default function App() {

  return (
    <div>
      <Header/>
      <Route exact path="/character/:id"
      render={(props) => (
        <IndividualCharacter {...props}/>
      )} />
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
