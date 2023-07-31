<template>
  <section class="contact-details main-layout" v-if="contact">
    <img
      :src="'https://api.dicebear.com/5.x/open-peeps/svg?seed=' + contact._id"
    />
    <div class="info">
      <h2>Name: {{ contact.name }}</h2>
      <h3>Email: {{ contact.email }}</h3>
      <h3>Phone: {{ contact.phone }}</h3>
      <TransferFunds :contact="contact" @loadTransactions="loadTransactions" />
      <TransactionList :transactions="transactions" />
      <RouterLink class="close-btn" to="/contact">
        <span class="material-symbols-outlined">close</span>
      </RouterLink>
    </div>
  </section>
</template>

<script>
import { contactService } from "../services/contact.service";
import { userService } from "../services/user.service";
import TransferFunds from "../cmps/transfer-funds.vue";
import TransactionList from "../cmps/transaction-list.vue";

export default {
  data() {
    return {
      contact: null,
      transactions: null,
    };
  },
  async created() {
    const contactId = this.$route.params._id;
    this.contact = await contactService.getById(contactId);
    this.loadTransactions();
  },
  methods: {
    loadTransactions() {
      let transactions = userService.getTransactions();
      transactions = transactions.filter(
        (transaction) => transaction.toId === this.contact._id
      );
      this.transactions = transactions;
    },
  },
  components: {
    TransferFunds,
    TransactionList,
  },
};
</script>