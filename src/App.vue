<template>
  <div id="app">
    <input type="text" v-model="newTodo" />
    <button @click="addTodo">Add To-Do</button>
    <ul>
      <TodoItem
        v-for="todo in todoList"
        :key="todo.id"
        :todo="todo"
        @removeTodo="removeTodo"
        @toggleTodoStatus="toggleTodoStatus"
      />
    </ul>
  </div>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useTodoStore } from "@/stores/todos";
import TodoItem from "@/components/TodoItem.vue";

export default {
  name: "App",
  components: {
    TodoItem,
  },
  computed: {
    ...mapWritableState(useTodoStore, ["newTodo", "todoList"]),
  },
  methods: {
    ...mapActions(useTodoStore, ["addTodo", "removeTodo", "toggleTodoStatus"]),
  },
};
</script>
