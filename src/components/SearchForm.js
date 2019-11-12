import React, {useState } from "react";
import CharacterCard from "./CharacterCard";

const SearchForm = props =>  {

  const [string, setString] = useState([]);

  const handleName = event => {

    let newState = props.element.filter(character => {
      return character.name.includes(event.target.value)
    });

    setString(newState);
  }

  console.log(props.element)
 
  return (
    <section className="search-form">
     <form>
       <label htmlFor="filter">
         Filter by Name:
          <input
          type="text"
          name="name"
          placeholder="Search..."
          onChange={handleName}
          />
       </label>
       {string.map(value =>(
      <CharacterCard 
      id={value.id}
      status={value.status}
      name={value.name}
      species={value.species}
      />
      ))}
       
     </form>
    </section>
  );
}

//{props.element.filter(value => (
//event.str.includes(value.name)
//))}

export default SearchForm;