import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import FormHead from "./FormHead";
import AddMovie from "./AddMovie";
import DeleteButton from "./DeleteButton";
import SearchForm from "./SearchForm";
import movies from "./movies.json";

let MovieForm = () => {
  const [movieList, setMovieList] = useState(movies);
  const [filteredMovieList, setfilteredMovieList] = useState(movies);
  const [search, setSearch] = useState({ search: "", selectList: "" });

  useEffect(() => {
    const handleFiltered = () => {
      const filteredMovies = movieList.filter((movie) => {
        // const lowercased = movie.search.selectList.toLowerCase();
        return movieList.includes(search.search);
      });
      setfilteredMovieList(filteredMovies);
    };
    handleFiltered();
  }, [movieList, search]);

  const addMovie = (movie) => {
    setMovieList([...movieList, movie]);
    console.log(movieList);
  };
  console.log(movieList);

  const removeMovie = (index) => {
    setMovieList(movieList.filter((movie, i) => i !== index));
  };

  const searchMovie = (event) => {
    setSearch(event.target.value);
  };

  const filteredMovies = () =>
    movieList.filter((movie) => {
      return movie.title.toLowerCase().includes(search);
    });

  let deleteAllMovies = () => {
    setMovieList([]);
  };

  // searchMovie = (search) => {
  //   const { movies } = this.state;
  //   this.setState({
  //     movies: movies.filter((movie) => {
  //       return movie.title.toLowerCase().includes(search);
  //     }),
  //   });
  // };

  return (
    <>
      <SearchForm
        handleChange={searchMovie}
        filteredMovies={filteredMovies}
        search={search}
      />
      <br />
      <table>
        <FormHead />
        <Movie movies={movieList} removeMovie={removeMovie} />
      </table>
      <DeleteButton deleteAllMovies={deleteAllMovies} />
      <br />
      <br />
      <br />
      <AddMovie addMovie={addMovie} />
    </>
  );
};

export default MovieForm;
