<template>
  <header class="app-header full main-layout">
    <div class="header-container">
      <RouterLink to="/home" class="logo-container" @click="closeNavbar">
        <img src="/img/bitcoin-logo.svg" alt="" />
        <h2>Mr.₿itcoin</h2>
      </RouterLink>
      <div class="user-info" v-if="loggedinUser || user">
        <span>Welcome, {{ loggedinUser.name }}</span>
        <span>Balance: {{ loggedinUser.balance }}₿</span>
      </div>
      <span v-if="rate" class="rate">Rate: 1$ = {{ rate }}₿</span>
      <nav ref="nav">
        <RouterLink @click="closeNavbar" to="/home">Home</RouterLink>
        <RouterLink @click="closeNavbar" to="/contact">Contacts</RouterLink>
        <RouterLink @click="closeNavbar" to="/stats">Stats</RouterLink>
      </nav>
      <span class="material-symbols-outlined menu-btn" @click="toggleNavbar">
        menu
      </span>
    </div>
  </header>
</template>

<script>
import { userService } from "../services/user.service";
import { bitcoinService } from "../services/bitcoin.service";

export default {
  props: ["user"],
  data() {
    return {
      loggedinUser: this.user,
      rate: null,
    };
  },
  async mounted() {
    const user = userService.getLoggedinUser();
    if (user) this.loggedinUser = user;
    this.rate = await bitcoinService.getRate();
  },
  methods: {
    toggleNavbar() {
      this.$refs.nav.classList.toggle("menu-open");
    },
    closeNavbar() {
      this.$refs.nav.classList.remove("menu-open");
    },
  },
};
</script>