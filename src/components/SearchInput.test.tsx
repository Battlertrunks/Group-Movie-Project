import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchInput from "./SearchInput";

test("searchInput updates state on form input", () => {
  render(
    <BrowserRouter>
      <SearchInput />
    </BrowserRouter>
  );
  const inputEl = screen.getByRole("textbox");
  fireEvent.change(inputEl, { target: { value: "test" } });
  const testEl = screen.getByDisplayValue("test");
  expect(testEl).toHaveValue("test");
});
