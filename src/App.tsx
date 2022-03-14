import React from "react";
import "./App.css";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import MovieGallery from "./components/MovieGallery";

function App() {
  return (
    <div className="App">
      <Header />
      <FilterBar />
      <MovieGallery />
    </div>
  );
}

export default App;
