<template>
  <div class="table-responsive">
    <table class="table table-hover table-striped table-bordered table-sm my-3">
      <slot></slot>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
};
</script>
