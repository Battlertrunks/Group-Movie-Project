import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieCardModel from "../models/MovieCard";
import MovieCard from "./MovieCard";

const testCard: MovieCardModel = {
  genre: "testGenre",
  title: "testTitle",
  vote_average: 1,
  poster_path: "testPath",
  id: 1,
  total_pages: 1,
};

test("renders title to MovieCard", () => {
  render(
    <BrowserRouter>
      <MovieCard singleMovieCard={testCard} />
    </BrowserRouter>
  );
  const cardElement = screen.getByText("testTitle");
  expect(cardElement).toBeInTheDocument();
});
