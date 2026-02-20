import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Task Manager home page", () => {
  render(<App />); // no BrowserRouter here

  const heading = screen.getByText(/Welcome to Task Manager/i);
  expect(heading).toBeInTheDocument();
});