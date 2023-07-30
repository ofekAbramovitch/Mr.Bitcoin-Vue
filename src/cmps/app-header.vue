<template>
  <header class="app-header full main-layout">
    <div class="header-container">
      <RouterLink to="/" class="logo-container">
        <img src="../assets//img//bitcoin-logo.svg" alt="" />
        <h2>Mr.</h2>
        <span class="fa-solid bitcoin"></span>
        <h2>itcoin</h2>
      </RouterLink>
      <div class="user-info">
        <span v-if="user">{{ user.name }}</span>
      </div>
      <span v-if="rate">1$ = {{ rate }}₿</span>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contacts</RouterLink>
        <RouterLink to="/stats">Stats</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>
import { userService } from "../services/user.service";
import { bitcoinService } from "../services/bitcoin.service";

export default {
  data() {
    return {
      user: userService.getUser(),
      rate: null,
    };
  },
  async created() {
    this.rate = await bitcoinService.getRate();
  },
};
</script>