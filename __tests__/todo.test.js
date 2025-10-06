import { Todo } from "../src/todo.js";

test("add todo item", () => {
  const todo = new Todo();
  todo.add("Buy milk");
  expect(todo.items).toContain("Buy milk");
});

test("remove todo item", () => {
  const todo = new Todo();
  todo.add("Buy milk");
  todo.remove("Buy milk");
  expect(todo.items).not.toContain("Buy milk");
});
