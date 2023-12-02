<template>
  <li>
    <p v-if="!isEditing">
      <div @click="toggleTodoStatus">
        <span v-if="todo.done">[x]</span>
        <span v-else>[ ]</span>
      </div>
      {{ todo.text }}
      <button @click="startEditing">Edit</button>
      <button @click="removeTodo">Remove Todo</button>
    </p>
    <p v-else>
      <input v-model="editedText" @keyup.enter="saveEdit" />
      <button @click="saveEdit">Save</button>
      <button @click="cancelEdit">Cancel</button>
    </p>
  </li>
</template>

<script>
export default {
  props: ['todo'],
  data() {
    return {
      isEditing: false,
      editedText: this.todo.text,
    };
  },
  methods: {
    removeTodo() {
      this.$emit('removeTodo', this.todo.id);
    },
    toggleTodoStatus() {
      this.$emit('toggleTodoStatus', this.todo.id);
    },
    startEditing() {
      this.isEditing = true;
    },
    saveEdit() {
      this.todo.text = this.editedText;
      this.isEditing = false;
    },
    cancelEdit() {
      this.isEditing = false;
      this.editedText = this.todo.text;
    },
  },
};
</script>
