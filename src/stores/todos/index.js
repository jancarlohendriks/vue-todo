import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

// const toggleProp = (prop, id, todo) => {
//   return todo.id === id ? { ...todo, [prop]: !todo[prop] } : todo;
// }

export const useTodoStore = defineStore({
  id: "todos",
  state: () => ({
    newTodo: "",
    todoList: [],
  }),
  actions: {
    addTodo() {
      this.todoList.push({
        id: uuid(),
        text: this.newTodo,
        done: false,
      });
      this.newTodo = "";
    },
    removeTodo(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
    toggleTodoStatus(id) {
      const todo = this.todoList.find((todo) => todo.id === id);
      if (todo) {
        todo.done = !todo.done;
      }
      // this.todoList = this.todoList.map((todo) => toggleProp('done', id, todo));
    },
  },
});
