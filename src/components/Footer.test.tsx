import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

test("test link to homepage in footer", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  const testLink1 = screen.getByText("2022 Sawddit inc.");
  const testLink2 = screen.getByText("Sawddit");
  expect(testLink1).toBeInTheDocument();
  expect(testLink2).toBeInTheDocument();
});
