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
  const [search, setSearch] = useState("");
  const [searchField, setSearchField] = useState("title");

  useEffect(() => {
    const handleFiltered = () => {
      const filteredMovies = movieList.filter((movie) => {
        const lowercased = movie[searchField].toLowerCase();
        return lowercased.includes(search);
      });
      setfilteredMovieList(filteredMovies);
    };
    handleFiltered();
  }, [movieList, search, searchField]);

  const addMovie = (movie) => {
    setMovieList([...movieList, movie]);
    console.log(movieList);
  };

  const removeMovie = (index) => {
    setMovieList(filteredMovieList.filter((movie, i) => i !== index));
  };

  const searchMovie = (event) => {
    setSearch(event.target.value);
  };

  let deleteAllMovies = () => {
    setfilteredMovieList([]);
  };

  return (
    <>
      <SearchForm
        handleChange={searchMovie}
        filteredMovies={filteredMovieList}
        search={search}
        searchField={searchField}
        setSearchField={setSearchField}
      />
      <br />
      <table>
        <FormHead />
        <Movie movies={filteredMovieList} removeMovie={removeMovie} />
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
