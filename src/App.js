import React, { useEffect, useState } from "react";

import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard.js";
import axios from 'axios';


function App() {

  const [element, setElement] = useState();

  useEffect(() => {

    axios
        .get('https://rickandmortyapi.com/api/character/')
  
        .then(response => {

          //console.log(response);
          setElement(response.data.results);
        })
  
        .catch(error => {
  
          console.log(error);
  
        });
  
  }, []);

  return (
    <main>
      <Header />
      {element.map(value => (
      <CharacterCard 
      id={value.id}
      name={value.name}
      status={value.status}
      species={value.species}
      />
  ))}
  </main>
  );
}

export default App;
