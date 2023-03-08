import "./App.css";
import MovieForm from "./Pages/MovieForm";
import Home from "./Pages/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import MovieInfo from "./Components/MovieInfo";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie-list" element={<MovieForm />} />
          <Route path="/movie-list/:id" element={<MovieInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
