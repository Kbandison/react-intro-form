import Movie from "../Components/Movie";
import FormHead from "../Components/FormHead";
import AddMovie from "../Components/AddMovie";
import SearchForm from "../Components/SearchForm";

let MovieForm = (props) => {
  return (
    <div className="movie-div">
      <div className="movie-page">
        <SearchForm
          handleChange={props.searchMovie}
          filteredMovies={props.filteredMovieList}
          search={props.search}
          searchField={props.searchField}
          setSearchField={props.setSearchField}
        />
        <br />
        <div className="movies">
          <AddMovie addMovie={props.addMovie} />
          <table>
            <FormHead />
            <Movie
              movies={props.filteredMovieList}
              removeMovie={props.removeMovie}
              deleteAllMovies={props.deleteAllMovies}
            />
          </table>
        </div>
      </div>
    </div>
  );
};

export default MovieForm;
