import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("check if there is sign in link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign In/i);
  expect(linkElement).toBeInTheDocument();
});
