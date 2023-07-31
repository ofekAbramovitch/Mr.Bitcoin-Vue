<template>
  <section class="home">
    <section class="home-txt" v-if="user">
      Welcome Back, {{ user.name }}
      <RouterLink to="/contact"><button>Get Started</button></RouterLink>
    </section>
  </section>
</template>

<script>
import { bitcoinService } from "../services/bitcoin.service";
import { userService } from "../services/user.service";

export default {
  data() {
    return {
      user: null,
      rate: null,
    };
  },
  async created() {
    this.user = userService.getLoggedinUser();
    this.rate = await bitcoinService.getRate();
  },
};
</script>