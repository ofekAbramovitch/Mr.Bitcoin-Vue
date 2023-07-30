<template>
  <section class="chart-container">
    <Bar
      v-if="chartData.labels"
      id="my-charrt-id"
      :options="chartOptions"
      :data="chartData"
    />
  </section>
</template>

<script>
import { bitcoinService } from "../services/bitcoin.service";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: null,
        datasets: [
          {
            label: "Value (USD)",
            backgroundColor: "#f7931a99",
            data: null,
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  async created() {
    this.prices = await bitcoinService.getMarketPriceHistory();
    this.chartData.labels = this.prices.values.map((val) => {
      const date = new Date(val.x * 1000);
      return `${date.getDate() + 1}.${date.getMonth() + 1}`;
    });
    this.chartData.datasets[0].data = this.prices.values.map((val) => val.y);
  },
};
</script>

<style>
</style>