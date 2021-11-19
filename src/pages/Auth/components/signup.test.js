import { BrowserRouter } from "react-router-dom";
import Register from "./Register";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test('renders learn react link', () => {
    render(<Register />);
    const heading = screen.getByText(/Join us!/i);
    expect(heading).toBeInTheDocument();
  });