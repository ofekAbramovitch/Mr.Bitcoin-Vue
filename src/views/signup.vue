<template>
  <section class="signup full">
    <div class="signup-form">
      <h2>Login</h2>
      <form @submit.prevent="onLogin">
        <input
          type="text"
          placeholder="Enter your name..."
          v-model="user.name"
        />
        <button>Login</button>
      </form>
    </div>
  </section>
</template>

<script>
import { userService } from "../services/user.service";

export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.user = userService.getEmptyUser();
  },
  methods: {
    async onLogin() {
      try {
        if (!this.user.name) return
        await userService.login(this.user);
        this.$emit("setUser");
        this.$router.push("/home");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>