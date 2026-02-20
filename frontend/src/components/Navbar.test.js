import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

test("renders Task Manager title", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  const title = screen.getByText(/Task Manager/i);
  expect(title).toBeInTheDocument();
});