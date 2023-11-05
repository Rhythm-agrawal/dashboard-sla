<template>
  <highcharts
    class="highchart-chart"
    :options="{
      ...defaultPieOptions,
      title: { text: title },
      series,
      ...options,
    }"
  ></highcharts>
</template>

<script>
export default {
  name: "PieChart",
  props: {
    options: Object,
    title: String,
    series: Array,
  },
  setup() {
    const defaultPieOptions = {
      chart: { type: "pie" },
      pie: {
        shadow: false,
        center: ["50%", "50%"],
      },
    };
    return {
      defaultPieOptions,
    };
  },
};
</script>
