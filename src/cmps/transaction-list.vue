<template>
  <section class="transaction-list">
    <h2>Recent transactions:</h2>
    <ul v-if="transactions">
      <li v-for="(transaction, idx) in transactions" :key="idx">
        <TransactionPreview :transaction="transaction" />
      </li>
    </ul>
  </section>
</template>

<script>
import TransactionPreview from "./transaction-preview.vue";

export default {
  props: ["transactions"],
  components: { TransactionPreview },
};
</script>