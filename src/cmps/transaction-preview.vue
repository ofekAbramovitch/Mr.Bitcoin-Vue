<template>
  <section class="transaction-preview">
    <h4>At: {{ getTime }}</h4>
    <h4>Amount: {{ transaction.amount }}₿</h4>
  </section>
</template>

<script>
import { utilService } from "../services/util.service";

export default {
  props: ["transaction"],
  created() {
    console.log(this.transaction);
  },
  computed: {
    getTime() {
      return utilService.calculateTime(this.transaction.at);
    },
  },
};
</script>