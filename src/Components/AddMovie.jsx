import { useState } from "react";

let AddMovie = (props) => {
  const [inputFields, setInputFields] = useState({
    title: "",
    actors: [],
    plot: "",
    genre: "",
    imdbRating: "",
    director: "",
    year: "",
    dateAdded: new Date().toString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addMovie(inputFields);
    setInputFields({
      title: "",
      actors: [],
      plot: "",
      genre: "",
      imdbRating: "",
      director: "",
      year: "",
      dateAdded: new Date().toString(),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="form-title">Add a Movie</h2>
      <label htmlFor="title">Title:</label>
      <br />
      <input
        type="text"
        name="title"
        id="title"
        className="text-input"
        placeholder="Enter a movie title"
        value={inputFields.title}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="actors">Actors:</label>
      <br />
      <input
        type="text"
        name="actors"
        id="actors"
        className="text-input"
        placeholder="Enter actors"
        value={inputFields.actors}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="plot">Plot:</label>
      <br />
      <input
        type="text"
        name="plot"
        id="plot"
        className="text-input"
        placeholder="Enter a plot"
        value={inputFields.plot}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="genre">Genre:</label>
      <br />
      <input
        type="text"
        name="genre"
        id="genre"
        className="text-input"
        placeholder="Enter a genre"
        value={inputFields.genre}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="imdbRating">Rating:</label>
      <br />
      <input
        type="text"
        name="imdbRating"
        id="imdbRating"
        className="text-input"
        placeholder="Enter a rating"
        value={inputFields.imdbRating}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="director">Director:</label>
      <br />
      <input
        type="text"
        name="director"
        id="director"
        className="text-input"
        placeholder="Enter a director"
        value={inputFields.director}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="year">Year Released:</label>
      <br />
      <input
        type="text"
        name="year"
        id="year"
        className="text-input"
        placeholder="Enter a year"
        value={inputFields.year}
        onChange={handleChange}
      />
      <br />
      <br />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
