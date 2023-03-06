import { useState } from "react";

let AddMovie = (props) => {
  const [inputFields, setInputFields] = useState({
    title: "",
    actors: "",
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
      actors: "",
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
      <label htmlFor="title">Title</label>
      <br />
      <input
        type="text"
        name="title"
        id="title"
        value={inputFields.title}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="actors">Actors</label>
      <br />
      <input
        type="text"
        name="actors"
        id="actors"
        value={inputFields.actors}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="plot">Plot</label>
      <br />
      <input
        type="text"
        name="plot"
        id="plot"
        value={inputFields.plot}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="genre">Genre</label>
      <br />
      <input
        type="text"
        name="genre"
        id="genre"
        value={inputFields.genre}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="imdbRating">Rating</label>
      <br />
      <input
        type="text"
        name="imdbRating"
        id="imdbRating"
        value={inputFields.imdbRating}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="director">Director</label>
      <br />
      <input
        type="text"
        name="director"
        id="director"
        value={inputFields.director}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="year">Released</label>
      <br />
      <input
        type="text"
        name="year"
        id="year"
        value={inputFields.year}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
