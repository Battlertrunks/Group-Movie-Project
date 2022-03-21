import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import FilterSearchBar from "./FilterSearchBar";

test("Testing filter label", () => {
  render(
    <BrowserRouter>
      <FilterSearchBar />
    </BrowserRouter>
  );

  const dropdown = screen.getByLabelText("label-test");
  fireEvent.change(dropdown, { target: { value: "vote_count.desc" } });
  //   expect(dropdown).toHaveValue("popularity.desc");
  expect(dropdown).toHaveValue("vote_count.desc");
  //   expect(dropdown).toHaveValue("release_date.desc");
  //   expect(dropdown).toHaveValue("release_date.asc");
});

test("testing the rating labels", () => {
  render(
    <BrowserRouter>
      <FilterSearchBar />
    </BrowserRouter>
  );

  const dropdownRating = screen.getByLabelText("label-rating-test");
  fireEvent.change(dropdownRating, { target: { value: "7" } });
  expect(dropdownRating).toHaveValue("7");
});
