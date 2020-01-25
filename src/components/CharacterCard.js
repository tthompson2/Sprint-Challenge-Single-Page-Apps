import React from "react";

export default function CharacterCard(props) {
  return ( 
  <div>
    {props.image}
    <br/>
    {props.id}
    {props.name}
    {props.status}
    {props.species}
    {props.type}
    <br/>
    <br/>
  </div>

  );
}
