import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

let MovieInfo = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    let getMovie = async () => {
      let res = await fetch(`http://localhost:3000/data.json`);
      let data = await res.json();
      setMovie(data[params.id]);
    };

    getMovie();
  }, [params.id]);

  // console.log(movie);
  return (
    <>
      <h1>{movie.title}</h1>
      <h3>Plot: {movie.plot}</h3>
      <h3>Actors: {movie.actors}</h3>
      <h3>Genre: {movie.genre}</h3>
      <h3>Rating: {movie.imdbRating}</h3>
      <h3>Director: {movie.director}</h3>
      <h3>Year Released: {movie.year}</h3>
      <Link to="/movie-list">Back to Movie List</Link>
    </>
  );
};

export default MovieInfo;
