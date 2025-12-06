import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
// If Button is default export, import it like this:
import Button from "./Button";

describe("Button Component", () => {
  it("renders button with children", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
    expect(button).toHaveAttribute("type", "button");
  });

  // 2. rendering with button text prop

  it("renders button with btnText prop when provided", () => {
    render(<Button btnText="Submit">should not render</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveTextContent("Submit");
    expect(button).not.toHaveTextContent("should not render");
  });

  //3. Default varient primary
  it("apply primary varient styles by default", () => {
    render(<Button>Primary</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass("bg-blue-500", "text-white");
  });

  // 4. apply vrient secondary
  it("apply secondary varient styles", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass("bg-gray-200", "text-gray-800");
  });

  //5. Disabled state
  it("render the button disabled with proper classes and attributes", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByTestId("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("opacity-50", "cursor-not-allowed");
    expect(button).toHaveAttribute("disabled");
  });

  //6 click handler

  it("call onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test 7: Click handler not called when disabled
  it("dose not call click when the button is disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    );
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  //// Test 8: Custom type attribute
  it("supports different button types", () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveAttribute("type", "submit");
  });

  // Test 9: Default type is button
  it('has default type as "button"', () => {
    render(<Button>Default</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveAttribute("type", "button");
  });
  // Test 10: Margin classes

  it("apply the margin calss on button", () => {
    render(
      <Button
        marginTop="mt-4"
        marginBottom="mb-4"
        marginLeft="ml-4"
        marginRight="mr-4"
      >
        With Margins
      </Button>
    );
    const button = screen.getByTestId("button");
    expect(button).toHaveClass("mt-4", "mb-4", "ml-4", "mr-4");
  });

  // Test 11: Custom className prop
  it("merge custom className  with base class", () => {
    render(<Button className="custom-class extra-class">Custom</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass("custom-class extra-class");
    expect(button).toHaveClass("px-4", "py-2", "rounded");
  });

  // Test 12: Spread props (additional HTML button attributes)
  it("pass additional html button attribute correctyl", () => {
    render(
      <Button aria-label="Close" title="Close button" data-custom="test">
        Close
      </Button>
    );
    const button = screen.getByTestId("button");
    expect(button).toHaveAttribute("aria-label", "Close");
    expect(button).toHaveAttribute("title", "Close button");
    expect(button).toHaveAttribute("data-custom", "test");
  });

  // Test 13: Focus styles for accessibility
  it("include focus style for accessibility", () => {
    render(<Button>Focusable</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass("focus:ring-2", "focus:ring-offset-2");
  });
  // Test 14: Primary variant focus ring color
  it("has blue focus ring for priamry variant", () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass("focus:ring-blue-500");
  });
  // Test 15: Secondary variant focus ring color
  it("has gray focus ring for secondary variant", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass("focus:ring-gray-500");
  });

  // Test 16: Button with React nodes as children
  it("renders React nodes as children", () => {
    render(
      <Button>
        <span data-testid="icon">🔔</span>
        Notifications
      </Button>
    );
    const button = screen.getByTestId("button");
    const icon = screen.getByTestId("icon");
    expect(button).toContainElement(icon);
    expect(button).toHaveTextContent("Notifications");
  });
});

// Optional: Snapshot test
