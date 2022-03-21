import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

test("Renders the title", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const firstSpanEl = screen.getByText("Sawd");
  const secondSpanEl = screen.getByText("dit");
  expect(firstSpanEl).toBeInTheDocument();
  expect(secondSpanEl).toBeInTheDocument();
});

test("Renders button to Watched", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkWatchedEl = screen.getByRole("button", { name: "Watched" });
  expect(linkWatchedEl).toBeInTheDocument();
});
