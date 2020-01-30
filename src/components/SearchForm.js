import React, { useState, useEffect } from "react";
import ReactDom from "react-dom"
import LocationsList from "./LocationsList";

export default function SearchForm( props ) {
 
  const [searchItem, setSearchItem] = useState({string: ""});

  //console.log(props.characters); // this is the data that needs to be filtered

  const changeHandler = event => {
    
    let newState = props.characters.filter(character => {
      return character.name.includes(event.target.value);
    })
    console.log(newState);
    props.setCharacters(newState);
  }

  const handleSubmission = event => {
    event.preventDefault();
    console.log(searchItem.string);
  }


  return (
    <section className="search-form">
      <form onSubmit={event => handleSubmission(event)}>
     <input 
       type="text"
       placeholder="Search"
       string="email"
       onChange={event => changeHandler(event)}    
     />
     <button onClick={props.memberToEdit}>Submit</button>
     </form>
     <LocationsList characters={props.characters}/>
    </section>
  );
}
