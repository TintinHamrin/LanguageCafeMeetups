import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BasicSelect from "./index";

describe("fucking around", () => {
  test("test2", () => {
    render(<BasicSelect />);
    const x = screen.getByText(/select/i);
    expect(x).toBeInTheDocument();
  });
});
