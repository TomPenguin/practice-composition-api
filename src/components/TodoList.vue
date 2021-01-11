<template>
  <p>
    <span>{{ todo.title }}</span>
    <input type="checkbox" value="todo.done" @change="toggle" />
    <span>{{ date }}</span>
    <button @click="remove">削除</button>
  </p>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "@vue/composition-api";
import { Todo } from "@/types/todo";

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
    },
  },

  emits: ['toggle', 'remove'],

  setup(props, context) {
    const date = computed(() => {
      if (!props.todo) return;
      const { createdAt } = props.todo;
      return `${createdAt.getFullYear()}/${
        createdAt.getMonth() + 1
      }/${createdAt.getDate()}`;
    });

    const toggle = () => context.emit('toggle', props.todo?.id)
    const remove = () => context.emit('remove', props.todo?.id)

    return {
      date,
      toggle,
      remove
    };
  },
});
</script>