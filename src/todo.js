export class Todo {
  constructor() {
    this.items = [];
  }
  add(item) {
    if (!item) throw new Error("Item cannot be empty");
    this.items.push(item);
    return this.items;
  }
  remove(item) {
    this.items = this.items.filter(i => i !== item);
    return this.items;
  }
}
