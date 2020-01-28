import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchForm from "./SearchForm";
import CharacterDetails from "./CharacterDetails";

const CharacterList = props => {
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
      <SearchForm characters={characters}/>

      {characters.map(character => (
        <Link to={`character/${character.id}`}>
          <CharacterDetails key={character.id} character={character} />
        </Link>
      ))
      }
    </section>
  );
}

export default CharacterList;