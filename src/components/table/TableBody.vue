<template>
  <tbody v-bind="$attrs">
    <slot></slot>
  </tbody>
</template>

<script>
export default {
  name: "TableBody",
};
</script>
