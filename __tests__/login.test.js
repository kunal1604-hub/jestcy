import { Login } from "../src/login.js";

test("should authenticate with valid credentials", () => {
  const login = new Login();
  expect(login.authenticate("admin", "1234")).toBe("Login successful");
});

test("should reject invalid credentials", () => {
  const login = new Login();
  expect(login.authenticate("user", "wrong")).toBe("Invalid credentials");
});
