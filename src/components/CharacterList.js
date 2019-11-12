import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard.js";
import SearchForm from "./SearchForm.js";

export default function CharacterList() {
  const [element, setElement] = useState([]);

  useEffect(() => {
    axios
        .get('https://rick-api.herokuapp.com/api/character/')
  
        .then(response => {
          console.log(response);
          setElement(response.data.results);
        })
  
        .catch(error => {
  
          console.log(error);
  
        });
  }, []);

  return (
    <section className="character-list">
      <SearchForm/>
      <h2>{element.map(value =>(
      <CharacterCard 
      id={value.id}
      status={value.status}
      name={value.name}
      species={value.species}
      />
      ))}</h2>
    </section>
  );
}