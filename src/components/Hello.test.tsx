import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Hello } from "./Hello";

test("loads and displays greeting", async () => {
  // ARRANGE
  render(<Hello />);

  // ACT
  await userEvent.click(screen.getAllByText("1")[0]);
});
