import React, { useEffect, useState } from "react";

import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard.js";
import axios from 'axios';
import { Route } from 'react-router-dom';


function App() {

  const [element, setElement] = useState([]);

  useEffect(() => {

    axios
        .get('https://rickandmortyapi.com/api/character/')
  
        .then(response => {
          setElement(response.data.results);
        })
  
        .catch(error => {
  
          console.log(error);
  
        });
  
  }, []);

  return (
    <main>
      {console.log(element)}
      <Header />
      {element.map(value =>(
      <CharacterCard 
      id={value.id}
      status={value.status}
      name={value.name}
      species={value.species}
      />
      ))}
  </main>
  );
}

export default App;
