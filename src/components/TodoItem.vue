<template>
  <li>
    <p>
      <span @click="changeStatus">
        <span v-if="todo.done">[x]</span>
        <span v-else>[ ]</span>
      </span>
      {{ todo.text }}
      <button @click="removeTodo">Remove Todo</button>
    </p>
  </li>
</template>

<script>
export default {
  props: ["todo"],
  methods: {
    removeTodo() {
      this.$emit("removeTodo", this.todo.id);
    },
    changeStatus() {
      this.$emit("changeStatus", this.todo.id);
    },
  },
};
</script>
