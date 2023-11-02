<template>
  <tfoot v-bind="$attrs">
    <slot></slot>
  </tfoot>
</template>

<script>
export default {
  name: "TableFooter",
};
</script>
