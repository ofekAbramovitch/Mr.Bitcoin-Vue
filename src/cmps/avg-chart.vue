<template>
  <section class="chart-container">
    <Bar
      v-if="avgs"
      id="my-chart-id"
      :options="chartOptions"
      :data="getChartData"
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
      avgs: null,
      chartOptions: {
        responsive: true,
      },
    };
  },
  async created() {
    this.avgs = await bitcoinService.getAvgBlockSize();
  },
  computed: {
    getChartData() {
      return {
        labels: this.getDataLabels,
        datasets: [
          {
            label: "Avarage block size (in MB)",
            backgroundColor: "#f7931a99",
            data: this.getDatasetData,
          },
        ],
      };
    },

    getDataLabels() {
      return this.avgs.values.map((val) => {
        const date = new Date(val.x * 1000);
        return `${date.getDate() + 1}.${date.getMonth() + 1}`;
      });
    },

    getDatasetData() {
      return this.avgs.values.map((val) => val.y);
    },
  },
};
</script>