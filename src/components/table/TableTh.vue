<template>
  <th v-bind="$attrs"><slot></slot></th>
</template>

<script>
export default {
  name: "TableTh",
};
</script>
