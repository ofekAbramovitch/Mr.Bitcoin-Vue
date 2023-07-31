<template>
  <section class="contact-filter main-layout">
    <p class="large">Search</p>
    <input
      type="text"
      @input="onFilterBy"
      v-model="filterBy.txt"
      placeholder="Search by name"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        txt: "",
      },
    };
  },
  methods: {
    onFilterBy() {
      this.$emit("filter", this.filterBy);
    },
  },
};
</script>