import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("variant test", () => {
  render(<Button variant="primary">variantBTN</Button>);
  const button = screen.getByText("variantBTN");
  expect(button).toHaveClass("primary");
});

test("Disabled test", () => {
  render(<Button disabled>disabledBTN</Button>);
  const button = screen.getByText("disabledBTN");
  expect(button).toBeDisabled();
  expect(button).toHaveClass("disabled"); 
});

test("loading test", () => {
  render(<Button loading>loading...</Button>);
  const button = screen.getByText("loading...");
  expect(button).toBeInTheDocument();
});

test("size test", () => {
  render(<Button size="large">largeBTN</Button>);
  const button = screen.getByText("largeBTN");
  expect(button).toHaveClass("large"); 
});
