import React from "react";
import { Link } from "react-router-dom";

let Movie = (props) => {
  return (
    <tbody>
      {props.movies.map((movie, index) => {
        return (
          <tr key={index}>
            <th>{index + 1}</th>
            <td>{movie.title}</td>
            <td>{movie.actors}</td>
            <td>{movie.plot}</td>
            <td>{movie.genre}</td>
            <td>{movie.imdbRating}</td>
            <td>{movie.director}</td>
            <td>{movie.year}</td>
            <td>{new Date().toString()}</td>
            <td>
              <button>
                <Link to={`/movie-list/${index}`}>View Movie</Link>
              </button>
            </td>
            <td>
              <button onClick={() => props.removeMovie(index)}>Delete</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default Movie;
