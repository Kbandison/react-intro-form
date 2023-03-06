// import React, { useState } from "react";

let SearchForm = (props) => {
  console.log(props.search.search);

  let handleSubmit = (event) => {
    event.preventDefault();
    props.filteredMovies(props.search);
    console.log(props.filteredMovies);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Search for a Movie</h1>
      {/* <select
        name="selectList"
        id="selectList"
        value={props.search.selectList}
        onChange={props.handleChange}
      >
        <option value="name">Name</option> 
        <option value="director">Director</option>
        <option value="actor">Actor</option>
        <option value="genre">Genre</option>
        <option value="year">Year Released</option>
      </select> */}
      <label htmlFor="search">Search</label>
      <input
        type="text"
        name="search"
        placeholder="Search for a movie"
        id="search"
        value={props.search.search}
        onChange={props.handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
