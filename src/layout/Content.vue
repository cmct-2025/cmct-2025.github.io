<script setup lang="ts">
import { computed } from "vue";

defineOptions({
  name: "Content"
});

const props = defineProps<{
  align?: "left" | "center" | "right";
}>();

const alignClass = computed(() => {
  return {
    left: "align-left",
    center: "align-center",
    right: "align-right",
  }[props.align ?? "center"];
});
</script>


<template>
  <div class="container">
    <div :class="['content', alignClass]">
      <slot />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  max-width: 1240px;
  width: 100%;
  margin: 0 20px;
  box-sizing: border-box;

  &.align-left {
    text-align: left;
  } 

  &.align-center {
    text-align: center;
  }

  &.align-right {
    text-align: right;
  }
}
</style>
