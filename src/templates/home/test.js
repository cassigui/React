import { render, screen } from "@testing-library/react";
import Home from "./index.jsx";

test("Teste do teste", () => {
  render(<Home />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
