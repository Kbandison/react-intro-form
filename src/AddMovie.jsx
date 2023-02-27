import React from "react";

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      title: "",
      actors: [],
      plot: "",
      genre: "",
      imdbRating: "",
      director: "",
      year: "",
      dateAdded: new Date().toString(),
    };

    this.state = this.initialState;
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newDate = new Date().toString();
    this.setState({ dateAdded: newDate });

    this.props.addMovie(this.state);

    this.initialState.dateAdded = newDate;
    this.setState(this.initialState);
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { title, actors, plot, genre, imdbRating, director, year } =
      this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="actors">Actors</label>
        <br />
        <input
          type="text"
          name="actors"
          id="actors"
          value={actors}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="plot">Plot</label>
        <br />
        <input
          type="text"
          name="plot"
          id="plot"
          value={plot}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="genre">Genre</label>
        <br />
        <input
          type="text"
          name="genre"
          id="genre"
          value={genre}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="imdbRating">Rating</label>
        <br />
        <input
          type="text"
          name="imdbRating"
          id="imdbRating"
          value={imdbRating}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="director">Director</label>
        <br />
        <input
          type="text"
          name="director"
          id="director"
          value={director}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="year">Released</label>
        <br />
        <input
          type="text"
          name="year"
          id="year"
          value={year}
          onChange={this.handleChange}
        />
        <br />
        <button type="submit">Add Movie</button>
      </form>
    );
  }
}

export default AddMovie;
