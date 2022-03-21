import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieDetailsRoute from "./MovieDetailsRoute";

test("test has container label", () => {
  render(
    <BrowserRouter>
      <MovieDetailsRoute />
    </BrowserRouter>
  );

  const hasWatched = screen.getByLabelText("movie-details");
  expect(hasWatched).toHaveClass("MovieDetailsRoute");
});

// test("test has watched label", () => {
//   render(
//     <BrowserRouter>
//       <MovieDetailsRoute />
//     </BrowserRouter>
//   );

//   const hasWatched = screen.findByLabelText("not-watched");
//   expect(hasWatched).toHaveClass("not-watched");
// });
