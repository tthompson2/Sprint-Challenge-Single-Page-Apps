import React from "react";

function SearchForm() {

  const handleSubmission = event => {
    event.preventDefault();
  }

  const handleSearch = event => {

    let currentString = [];
    let newString =[];

    if(event.targe.value != "") {

      currentString = this.props.items;

      newString = currentString.filter(item => {

        const lowerCase = item.toLowerCase();
        const filteredItem = event.target.value;
        return lowerCase.includes(filteredItem);
      });
    } else {
      newString = this.props.items;
    }
    this.setState({
      filteredItem: newString
    });
  }
 
  return (
    <section className="search-form">
     <form onSubmit={event => handleSubmission(event)}>
       <label>
         Name:
          <input
          type="text"
          name="name"
          placeholder="Search..."
          onChange={event => handleSearch(event)}
          />
       </label>
       <label>
        Species
         <input
          type="text"
          species="species"
          placeholder="Search..."
          onChange={event => handleSearch(event)}
         />
       </label>
     </form>
    </section>
  );
}

export default SearchForm;