import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterDetails = props => {

    return (
        <div>
          <CharacterCard character={props.character} />
        </div>
      );
}


export default CharacterDetails;