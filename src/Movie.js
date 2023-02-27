import React from "react";

class Movie extends React.Component {
  render() {
    return (
      <>
        {this.props.movies.map((movie, index) => {
          return (
            <tbody key={index}>
              <tr>
                <th>{index + 1}</th>
                <td>{movie.title}</td>
                <td>{movie.actors}</td>
                <td>{movie.plot}</td>
                <td>{movie.genre}</td>
                <td>{movie.imdbRating}</td>
                <td>{movie.director}</td>
                <td>{movie.year}</td>
                <td>{movie.dateAdded}</td>
                <td>
                  <button onClick={() => this.props.removeMovie(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </>
    );
  }
}
export default Movie;
