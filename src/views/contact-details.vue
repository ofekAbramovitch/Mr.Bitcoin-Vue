<template>
  <section class="contact-details main-layout" v-if="contact">
    <img :src="'https://robohash.org/' + contact.name" alt="" />
    <h2>Name: {{ contact.name }}</h2>
    <h3>Email: {{ contact.email }}</h3>
    <h3>Phone: {{ contact.phone }}</h3>
    <RouterLink to="/contact">Back</RouterLink>
  </section>
</template>

<script>
import { contactService } from "@/services/contact.service";

export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const contactId = this.$route.params._id;
    this.contact = await contactService.getById(contactId);
  },
};
</script>