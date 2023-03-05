import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      selectList: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchMovie(this.state.search);
  };

  render() {
    const { search } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Search for a Movie</h1>
        <select name="selectList" id="selectList">
          <option value="name">Name</option> 
          <option value="director">Director</option>
          <option value="actor">Actor</option>
          <option value="genre">Genre</option>
          <option value="year">Year Released</option>
        </select>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
