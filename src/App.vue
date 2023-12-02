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
import TodoItem from "@/components/TodoItem.vue";
import { mapState, mapActions, mapWritableState } from "pinia";
import { useTodoStore } from "@/stores/todos";

export default {
  name: "App",
  components: {
    TodoItem,
  },
  data() {
    // const store = useTodoStore();

    return {
      // store,
      // newTodo: store.newTodo,
      // todoList: store.todoList,
    };
  },
  computed: {
    ...mapWritableState(useTodoStore, ["newTodo", "todoList"]),
  },
  methods: {
    ...mapActions(useTodoStore, ["addTodo", "removeTodo", "toggleTodoStatus"]),
    // addTodo() {
    //   this.store.addTodo(this.newTodo);
    // },
    // removeTodo(id) {
    //   this.store.removeTodo(id);
    // },
    // toggleTodoStatus(id) {
    //   this.store.toggleTodoStatus(id);
    // },
  },
};
</script>
