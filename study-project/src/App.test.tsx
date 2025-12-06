import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// Mock pages
// Correct mocks (match real imports)
jest.mock("./pages/auth/LoginPage", () => () => <div>Login Page</div>);
jest.mock("./pages/auth/RegisterPage", () => () => <div>Register Page</div>);
jest.mock("./pages/dashboard/DashboardPage", () => () => (
  <div>Dashboard Page</div>
));

describe("App Routing Test", () => {
  test("renders LoginPage on default route '/'", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Login Page")).toBeInTheDocument();
  });

  test("renders RegisterPage on '/registration'", () => {
    render(
      <MemoryRouter initialEntries={["/registration"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Register Page")).toBeInTheDocument();
  });

  test("renders DashboardPage on '/dashboard'", () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Dashboard Page")).toBeInTheDocument();
  });
});
