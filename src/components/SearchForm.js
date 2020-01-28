import React, { useState, useEffect } from "react";
import ReactDom from "react-dom"
import LocationsList from "./LocationsList";

export default function SearchForm( props ) {
 
  const [searchItem, setSearchItem] = useState({string: ""});

  //console.log(props.searchValue); // this is the data that needs to be filtered

  const changeHandler = event => {
    setSearchItem({...searchItem, [event.target.name]: event.target.value});
  }

  const handleSubmission = event => {
    event.preventDefault();
    console.log(searchItem.string);
  }
  
  let filteredList = [];

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
     <LocationsList filteredList={filteredList}/>
    </section>
  );
}
