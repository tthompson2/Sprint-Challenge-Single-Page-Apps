import React from "react";

const CharacterCard = props => {

 return (

  <div>
    {props.id}
    {props.status}
    {props.name}
    {props.species}
  </div>
  )
}

export default CharacterCard;
