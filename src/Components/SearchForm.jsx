let SearchForm = (props) => {
  let handleSubmit = (event) => {
    event.preventDefault();
    props.filteredMovies(props.search);
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <h1 className="form-title">Search for a Movie</h1>
      <div className="search-form">
        <label htmlFor="selectList">Search by: </label>
        <select
          name="selectList"
          id="selectList"
          className="select-list"
          value={props.searchField}
          onChange={(e) => props.setSearchField(e.target.value)}
        >
          <option value="name">Name</option> 
          <option value="director">Director</option>
          <option value="genre">Genre</option>
        </select>{" "}
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          name="search"
          placeholder="Search for a movie"
          id="search"
          className="search-bar text-input"
          value={props.search}
          onChange={props.handleChange}
        />
      </div>
    </form>
  );
};

export default SearchForm;
