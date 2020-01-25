import React from "react";

export default function CharacterCard(props) {

  const {image, id, name, status, species, type} = props.character;

  return ( 
  <div>
    {image}
    <br/>
    {id}
    {name}
    {status}
    {species}
    {type}
    <br/>
    <br/>
  </div>

  );
}
