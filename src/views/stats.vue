<template>
  <section class="stats main-layout">
    <ValueChart />
    <AvgChart />
  </section>
</template>

<script>
import ValueChart from "@/cmps/value-chart.vue";
import AvgChart from "@/cmps/avg-chart.vue";

export default {
  components: {
    ValueChart,
    AvgChart,
  },
};
</script>