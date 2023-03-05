import React from "react";
import Movie from "./Movie";
import FormHead from "./FormHead";
import AddMovie from "./AddMovie";
import DeleteButton from "./DeleteButton";
import SearchForm from "./SearchForm";
import movies from "./movies.json";

class MovieForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: movies,
    };
  }

  addMovie = (movie) => {
    this.setState({
      movies: [...this.state.movies, movie],
    });
  };

  removeMovie = (index) => {
    const { movies } = this.state;

    this.setState({
      movies: movies.filter((movie, i) => {
        return i !== index;
      }),
    });
  };

  deleteAllMovies = () => {
    this.setState({
      movies: [],
    });
  };

  searchMovie = (search) => {
    const { movies } = this.state;
    this.setState({
      movies: movies.filter((movie) => {
        return movie.title.toLowerCase().includes(search);
      }),
    });
  };

  render() {
    return (
      <>
        <SearchForm searchMovie={this.searchMovie} />
        <br />
        <table>
          <FormHead />
          <Movie movies={this.state.movies} removeMovie={this.removeMovie} />
        </table>
        <DeleteButton deleteAllMovies={this.deleteAllMovies} />
        <br />
        <br />
        <br />
        <AddMovie addMovie={this.addMovie} />
      </>
    );
  }
}

export default MovieForm;
