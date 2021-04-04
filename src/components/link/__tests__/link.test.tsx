import { render } from "@testing-library/react";
import "jest-styled-components";
import React from "react";
import { Link } from "../Link";

it("matches snapshot", () => {
  const { asFragment } = render(<Link to="/home">Home</Link>);
  expect(asFragment()).toMatchSnapshot();
});
