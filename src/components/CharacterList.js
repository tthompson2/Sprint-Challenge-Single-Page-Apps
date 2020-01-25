import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {

    axios
    .get('https://rickandmortyapi.com/api/character/')

    .then(response => {
        setCharacters(response.data.results);
        console.log(response.data.results);
    })

    .catch(error => {
           console.log(error);
    })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
     {characters.map(character=>(
       <CharacterCard id={character.id}
       name={character.name}
       status={character.name}
       species={character.species}
       type={character.type}
       image={character.image}
       />
     ))}
    </section>
  );
}
