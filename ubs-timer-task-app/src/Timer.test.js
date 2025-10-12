import { render, screen, act } from "@testing-library/react";
import { Timer } from "./Timer";

describe("Timer Component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test("render inital time correctyl", () => {
    render(<Timer initalValue={5} />);
    expect(screen.getByText(/Time: 5/)).toBeInTheDoucment();
  });

  act(() => {
    jest.advanceTimersByTime(1000);
  });
});
