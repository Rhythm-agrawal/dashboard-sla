<template>
  <thead v-bind="$attrs">
    <slot></slot>
  </thead>
</template>

<script>
export default {
  name: "TableHeader",
};
</script>
