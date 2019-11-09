import React from "react";

function CharacterCard({props}) {

  return (

  <div>
    <h1>{props.id}</h1>
    <h1>{props.status}</h1>
    <h1>{props.species}</h1>
    <h1>{props.name}</h1>
  </div>
  )
}

export default CharacterCard;
