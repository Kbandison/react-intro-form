let SearchForm = (props) => {
  let handleSubmit = (event) => {
    event.preventDefault();
    props.filteredMovies(props.search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Search for a Movie</h1>
      <select
        name="selectList"
        id="selectList"
        value={props.searchField}
        onChange={(e) => props.setSearchField(e.target.value)}
      >
        <option value="name">Name</option> 
        <option value="director">Director</option>
        <option value="genre">Genre</option>
      </select>
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        name="search"
        placeholder="Search for a movie"
        id="search"
        value={props.search}
        onChange={props.handleChange}
      />
    </form>
  );
};

export default SearchForm;
