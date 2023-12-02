import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export const useTodoStore = defineStore({
  id: "todos",
  state: () => ({
    newTodo: "",
    todoList: [],
  }),
  actions: {
    addTodo(newTodo) {
      this.todoList.push({
        id: uuid(),
        text: this.newTodo,
        done: false,
      });
    },
    removeTodo(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
    toggleTodoStatus(id) {
      const todo = this.todoList.find((todo) => todo.id === id);
      if (todo) {
        todo.done = !todo.done;
      }
    },
  },
});
