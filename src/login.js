export class Login {
  authenticate(username, password) {
    if (username === "admin" && password === "1234") {
      return "Login successful";
    }
    return "Invalid credentials";
  }
}
