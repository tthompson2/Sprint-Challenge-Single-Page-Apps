import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const IndividualCharacter = props => {

  const id = props.match.params.id;

   const [individualCharacter, setIndividualCharacter] = useState([]);

   useEffect(() => {

    axios
       .get(`https://rickandmortyapi.com/api/character/${id}`)
       .then(response => {
           setIndividualCharacter(response.data);
           console.log(response);
       })
       .catch(error => {
           console.error(error);
       });
   }, []);

   return (
       <div>
           <CharacterCard character={individualCharacter}/>
       </div>
   )

}

export default IndividualCharacter;