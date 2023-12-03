import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";
import { ref } from "vue";

// SETUP STORE
export const useTodoStore = defineStore("todo", () => {
  const state = {
    newTodo: ref(""),
    todoList: ref([]),
  };

  const actions = {
    addTodo: () => {
      state.todoList.value.push({
        id: uuid(),
        text: state.newTodo.value,
        done: false,
      });
      state.newTodo.value = "";
    },
    removeTodo: (id) => {
      state.todoList.value = state.todoList.value.filter(
        (todo) => todo.id !== id
      );
    },
    toggleTodoStatus: (id) => {
      const todo = state.todoList.value.find((t) => t.id === id);
      if (todo) {
        todo.done = !todo.done;
      }
    },
  };

  return {
    ...state,
    ...actions,
  };
});

// OPTION STORE

// import { defineStore } from "pinia";
// import { v4 as uuid } from "uuid";

// export const useTodoStore = defineStore({
//   id: "todos",
//   state: () => ({
//     newTodo: "",
//     todoList: [],
//   }),
//   actions: {
//     addTodo() {
//       this.todoList.push({
//         id: uuid(),
//         text: this.newTodo,
//         done: false,
//       });
//       this.newTodo = "";
//     },
//     removeTodo(id) {
//       this.todoList = this.todoList.filter((todo) => todo.id !== id);
//     },
//     toggleTodoStatus(id) {
//       const todo = this.todoList.find((todo) => todo.id === id);
//       if (todo) {
//         todo.done = !todo.done;
//       }
//     },
//   },
// });
