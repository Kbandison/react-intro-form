import "./App.css";
import MovieForm from "./Pages/MovieForm";
import Home from "./Pages/Home";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import MovieInfo from "./Pages/MovieInfo";
import movies from "./movies.json";

function App() {
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
    <BrowserRouter className="App">
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/movie-list"
            element={
              <MovieForm
                searchMovie={searchMovie}
                search={search}
                searchField={searchField}
                setSearchField={setSearchField}
                removeMovie={removeMovie}
                deleteAllMovies={deleteAllMovies}
                addMovie={addMovie}
                filteredMovieList={filteredMovieList}
              />
            }
          />
          <Route
            path="/movie-list/:id"
            element={<MovieInfo movies={filteredMovieList} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
