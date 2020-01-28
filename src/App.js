import React, { useEffect, useState} from "react";
import axios from 'axios';
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import WelcomePage from "./components/WelcomePage";
import IndividualCharacter from "./components/IndividualCharacter.js";
import SearchForm from "./components/SearchForm.js";

export default function App() {

  const [searchValue, setSearchValue] = useState("");

  const memberToEdit = props => {
    console.log(props);
    console.log("test");
 }

  useEffect(() => {

    axios
      .get('https://rickandmortyapi.com/api/character/')

      .then(response => {
        setSearchValue(response.data.results);
        console.log(response.data.results);
      })

      .catch(error => {
        console.log(error);
      })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <div>
      <Header/>
      <SearchForm 
      searchValue={searchValue}
      memberToEdit={memberToEdit}/>
      <br/>
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
