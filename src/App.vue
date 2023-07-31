<script>
import AppHeader from "@/cmps/app-header.vue";
import { userService } from "./services/user.service";

export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    setuser() {
      this.user = userService.getLoggedinUser();
    },
  },
  components: {
    AppHeader,
  },
};
</script>

<template>
  <section class="app main-layout">
    <AppHeader :user="user" />
    <main class="main-container full">
      <RouterView v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'slide-fade'">
          <component :is="Component" @setUser="setuser" />
        </transition>
      </RouterView>
    </main>
  </section>
</template>

<style lang="css">
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>

