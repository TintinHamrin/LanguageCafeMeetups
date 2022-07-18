import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as util from "util";

// ref: https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
// ref: https://github.com/jsdom/jsdom/issues/2524
Object.defineProperty(window, "TextEncoder", {
  writable: true,
  value: util.TextEncoder,
});
Object.defineProperty(window, "TextDecoder", {
  writable: true,
  value: util.TextDecoder,
});

const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
import mongoose from "mongoose";

import Index from "./index";

describe("Meetups component", () => {
  test("renders post if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [],
    });
  });

  render(<Index />);

  const x = screen.getByText("language", { exact: false });
  expect(x).toBeInTheDocument();
});
