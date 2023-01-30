import Home from "../Home";
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<Home text="Chartreuse" />);
    expect(asFragment()).toMatchSnapshot();
});

it("inserts text in h1", () => {
    const { getByTestId, getByText } = render(<Home text="Chartreuse" />)
    expect(getByTestId("homeTitle")).toHaveTextContent("Chartreuse");
    expect(getByText("Chartreuse")).toHaveClass("home-title");
});
