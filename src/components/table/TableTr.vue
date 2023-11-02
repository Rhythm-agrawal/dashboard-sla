<template>
  <tr v-bind="$attrs">
    <slot></slot>
  </tr>
</template>

<script>
export default {
  name: "TableTr",
};
</script>
