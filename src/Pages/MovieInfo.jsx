import { Link, useParams } from "react-router-dom";

let MovieInfo = (props) => {
  const params = useParams();

  return (
    <div className="movie-div">
      <div className="movie-info">
        <h1>{props.movies[params.id].title}</h1>
        <p>
          <span className="info-title">Plot: </span>
          {props.movies[params.id].plot}
        </p>
        <p>
          <span className="info-title">Actors: </span>{" "}
          {props.movies[params.id].actors}
        </p>
        <p>
          <span className="info-title">Genre: </span>{" "}
          {props.movies[params.id].genre}
        </p>
        <p>
          <span className="info-title">Rating: </span>{" "}
          {props.movies[params.id].imdbRating}
        </p>
        <p>
          <span className="info-title">Director: </span>{" "}
          {props.movies[params.id].director}
        </p>
        <p>
          <span className="info-title">Year Released: </span>{" "}
          {props.movies[params.id].year}
        </p>
      </div>
      <Link to="/movie-list">
        <button>&larr; Back</button>
      </Link>
    </div>
  );
};

export default MovieInfo;
