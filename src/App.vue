<script>
import AppHeader from "@/cmps/app-header.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<template>
  <section class="app main-layout">
    <AppHeader />
    <main class="main-container full">
      <RouterView />
    </main>
  </section>
</template>

