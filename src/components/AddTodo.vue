<template>
  <div>
    <input type="text" v-model="state.inputValue" />
    <button @click="onClick" :disabled="state.hasError">追加</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";

interface State {
  inputValue: string;
  hasError: boolean;
}

export default defineComponent({
  emits: ["add"],

  setup(_, context) {
    const state = reactive<State>({
      inputValue: "",
      hasError: false,
    });

    const onClick = () => context.emit("add", state.inputValue);

    return {
      state,
      onClick,
    };
  },
});
</script>

