import React, { useState } from "react";

function SearchForm() {

  const [string, setString] = useState({name: "", species: ""});

  const handleNameEntry = event => {
    setString({...string, name: event.target.value});
  }

  const handleSpeciesEntry = event => {
    setString({...string, species: event.target.value});
  }

  const handleSubmission = event => {
    event.preventDefault();
  }
 
  return (
    <section className="search-form">
     <form onSubmit={event => handleSubmission(event)}>
       <label>
         Name:
          <input
          type="text"
          name="name"
          onChange={event => handleNameEntry(event)}
          />
       </label>
       <label>
        Species
         <input
          type="text"
          species="species"
          onChange={event => handleSpeciesEntry(event)}
         />
       </label>
     </form>
    </section>
  );
}

export default SearchForm;