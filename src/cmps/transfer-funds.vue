<template>
  <form @submit.prevent="onSaveTransaction" class="transfer-funds">
    <label for="amount">Amount</label>
    <input type="number" id="amount" v-model="transaction.amount" />
    <button class="primary">Transfer</button>
  </form>
</template>

<script>
import { userService } from "../services/user.service";

export default {
  props: ["contact"],
  data() {
    return {
      user: null,
      transaction: null,
    };
  },
  created() {
    this.user = userService.getLoggedinUser();
    this.transaction = userService.getEmptyTransaction();
    this.transaction.toId = this.contact._id;
    this.transaction.to = this.contact.name;
  },
  methods: {
    async onSaveTransaction() {
      try {
        if (this.transaction.amount === 0) return;
        await userService.transferFunds(this.transaction);
        this.$emit("loadTransactions");
        this.transaction.amount = 0;
        this.$router.push("/contact");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>