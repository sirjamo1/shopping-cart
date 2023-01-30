import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Shop from "../Shop";

test("product card renders product name", () => {
    render(<Shop />);
    const firstProductName = screen.getByTestId("product-card-0");
    expect(firstProductName);
});

test("product card renders product name with test id", () => {
    const { getByText } = render(<Shop />);
    const firstProductText = getByText("Yellow Chartreuse");
    expect(firstProductText).toBeInTheDocument();
});

test("check if increment/decrement buttons render and are enabled", () => {
    const { getByTestId } = render(<Shop />);
    const incrementButton = getByTestId("increment-button-0");
    const decrementButton = getByTestId("decrement-button-0");
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(incrementButton).toBeEnabled();
    expect(decrementButton).toBeEnabled();
});

test("on cart button click disable decrement/increment buttons", () => {
    const { getByTestId } = render(<Shop />);
    const cartButton = getByTestId("cart-button");
    const incrementButton = getByTestId("increment-button-0");
    const decrementButton = getByTestId("decrement-button-0");
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(incrementButton).toBeEnabled();
    expect(decrementButton).toBeEnabled();
    fireEvent.click(cartButton);
    expect(incrementButton).toBeDisabled();
    expect(decrementButton).toBeDisabled();
});

it("test incrementing/decrementing item count (won't go into negatives)", () => {
    const { getByTestId } = render(<Shop />);
    const incrementButton = getByTestId("increment-button-0");
    const decrementButton = getByTestId("decrement-button-0");
    const itemCount = getByTestId("item-count-0");
    expect(itemCount).toHaveTextContent("0");
    fireEvent.click(incrementButton);
    expect(itemCount).toHaveTextContent("1");
    fireEvent.click(incrementButton);
    expect(itemCount).toHaveTextContent("2");
    fireEvent.click(decrementButton);
    expect(itemCount).toHaveTextContent("1");
    fireEvent.click(decrementButton);
    expect(itemCount).toHaveTextContent("0");
    fireEvent.click(decrementButton);
    expect(itemCount).toHaveTextContent("0");
});

it("test add to cart resets item count", () => {
    const { getByTestId } = render(<Shop />);
    const incrementButton = getByTestId("increment-button-0");
    const addToCartButton = getByTestId("add-to-cart-button-0");
    const itemCount = getByTestId("item-count-0");
    expect(itemCount).toHaveTextContent("0");
    fireEvent.click(incrementButton);
    expect(itemCount).toHaveTextContent("1");
    fireEvent.click(incrementButton);
    expect(itemCount).toHaveTextContent("2");
    fireEvent.click(addToCartButton);
    expect(itemCount).toHaveTextContent("0");
});
