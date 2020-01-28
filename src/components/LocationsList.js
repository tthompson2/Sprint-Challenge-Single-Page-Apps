import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import CharacterDetails from "./CharacterDetails";

export default function LocationsList(props) {
   
    return (
      <div>
          {props.characters.map(character => (
        <Link to={`character/${character.id}`}>
          <CharacterDetails key={character.id} character={character} />
        </Link>
          ))
       }
      </div>
    );
}
