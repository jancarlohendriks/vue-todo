<template>
  <div id="app">
    <input
      type="text"
      placeholder="Add new to-do"
      @keydown.enter="handleAddTodo"
      v-model="newTodo"
    />
    <button @click="handleAddTodo">Add To-Do</button>
    <ul>
      <TodoItem
        v-for="todo in filteredTodoList"
        :key="todo.id"
        :todo="todo"
        @removeTodo="handleRemoveTodo"
        @changeStatus="handleChangeStatus"
      />
    </ul>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import TodoItem from "@/components/TodoItem.vue";

export default {
  name: "App",
  components: {
    TodoItem,
  },
  data() {
    return {
      newTodo: "",
      todoList: [],
    };
  },
  computed: {
    filteredTodoList() {
      return this.todoList;
    },
  },
  methods: {
    handleAddTodo() {
      const newTodo = {
        id: uuid(),
        text: this.newTodo,
        done: false,
      };
      this.todoList.push(newTodo);
    },
    handleRemoveTodo(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
    handleChangeStatus(id) {
      const todo = this.todoList.find((todo) => todo.id === id);
      if (todo) {
        todo.done = !todo.done;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-size: 2em;
}
</style>
