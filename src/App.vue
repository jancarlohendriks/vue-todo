<template>
  <div id="app">
    <input type="text" v-model="newTodo" />
    <button @click="addTodo">Add To-Do</button>
    <ul>
      <TodoItem
        v-for="todo in todoList"
        :key="todo.id"
        :todo="todo"
        @removeTodo="removeTodo(todo.id)"
        @toggleTodoStatus="toggleTodoStatus(todo.id)"
      />
    </ul>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/stores/todos";
import TodoItem from "@/components/TodoItem.vue";

const { newTodo, todoList } = storeToRefs(useTodoStore());
const { addTodo, removeTodo, toggleTodoStatus } = useTodoStore();
</script>
