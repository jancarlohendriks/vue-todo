<template>
  <li>
    <p v-if="!isEditing">
      <div @click="emit('toggleTodoStatus')">
        <span v-if="todo.done">[x]</span>
        <span v-else>[ ]</span>
      </div>
      {{ todo.text }}
      <button @click="startEditing">Edit</button>
      <button @click="emit('removeTodo')">Remove Todo</button>
    </p>
    <p v-else>
      <input v-model="editedText" @keyup.enter="saveEdit" />
      <button @click="saveEdit">Save</button>
      <button @click="cancelEdit">Cancel</button>
    </p>
  </li>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const { todo } = defineProps(['todo']);
const isEditing = ref(false);
const editedText = ref(todo.text);
const emit = defineEmits(['removeTodo', 'toggleTodoStatus'])

const startEditing = () => {
  isEditing.value = true;
};

const saveEdit = () => {
  todo.text = editedText.value;
  isEditing.value = false;
};

const cancelEdit = () => {
  isEditing.value = false;
  editedText.value = todo.text;
};
</script>
