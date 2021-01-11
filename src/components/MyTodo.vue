<template>
  <div>
    <todo-list
      v-for="todo in sortedTodos"
      :key="todo.id"
      :todo="todo"
      @toggle="todoStore.toggleTodo"
      @remove="todoStore.removeTodo"
    ></todo-list>
    <add-todo @add="todoStore.addTodo"></add-todo>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";

import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";

import { useTodoStore } from "@/useTodoStore";

export default defineComponent({
  components: {
    TodoList,
    AddTodo,
  },

  setup() {
    const todoStore = useTodoStore();
    const sortedTodos = computed(() =>
      todoStore.todos
        .slice()
        .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
    );

    return {
      todoStore,
      sortedTodos,
    };
  },
});
</script>