import React, { useState, useEffect } from "react";
import ReactDom from "react-dom"

export default function SearchForm() {
 
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchItem(event.target.value);
  }

  useEffect(() => {
  })

  return (
    <section className="search-form">
     <input 
       type="text"
       placeholder="Search"
       value={searchItem}
       onChange={handleChange}    
     />
    </section>
  );
}
