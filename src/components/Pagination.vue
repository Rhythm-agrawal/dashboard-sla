<template>
  <div class="pagination">
    <span>
      <a
        v-for="number in data"
        role="button"
        :class="'paginate_button ' + (number === currentPage ? 'active' : '')"
        @click="callback(number)"
        >{{ number }}</a
      >
    </span>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    data: Array,
    callback: Function,
  },
  setup() {
    //
  },
};
</script>
