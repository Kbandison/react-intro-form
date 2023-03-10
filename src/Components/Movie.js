import React from "react";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";

let Movie = (props) => {
  return (
    <tbody>
      {props.movies.map((movie, index) => {
        return (
          <tr key={index} className="movie-row">
            <th>{index + 1}</th>
            <td>{movie.title}</td>
            <td>{new Date().toString()}</td>
            <td>
              <Link to={`/movie-list/${index}`}>
                <button>View Movie</button>
              </Link>
            </td>
            <td>
              <button onClick={() => props.removeMovie(index)}>Delete</button>
            </td>
          </tr>
        );
      })}
      <tr>
        <td>
          <DeleteButton deleteAllMovies={props.deleteAllMovies} />
        </td>
      </tr>
    </tbody>
  );
};
export default Movie;
