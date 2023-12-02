<template>
  <div id="app">
    <input type="text" v-model="newTodo" name="" id="" />
    <button @click="handleAddTodo">Add To-Do</button>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        <p>
					<div @click="handleChangeStatus(todo.id)">
						<span v-if="todo.done">[x]</span>
						<span v-else>[ ]</span>
					</div>
          {{ todo.text }}
          <button @click="handleRemoveTodo(todo.id)">Remove Todo</button>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";

export default {
  name: "App",
  data() {
    return {
      newTodo: "",
      todoList: [],
    };
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
			const todo = this.todoList.find(todo => todo.id === id)
			todo.done = !todo.done
		}
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
