<template>
  <nav aria-label="Pagination">
    <ul class="pagination">
      <li
        v-for="number in data"
        :class="'page-item' + (number === activePage ? ' active' : '')"
      >
        <a role="button" class="page-link" @click="callback(number)">{{
          number
        }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    data: Array,
    callback: Function,
    activePage: Number,
  },
  setup() {
    //
  },
};
</script>
