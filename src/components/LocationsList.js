import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import { Link } from 'react-router-dom';
import CharacterDetails from "./CharacterDetails";

export default function LocationsList(props) {
   
    return (
      <div>
          {props.filteredList.map(character => (
        <Link to={`character/${character.id}`}>
          <CharacterDetails key={character.id} character={character} />
        </Link>
          ))
       }
      </div>
    );
}
