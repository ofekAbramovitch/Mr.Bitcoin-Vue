<template>
  <form @submit.prevent="save(contact)" v-if="contact" class="contact-edit main-layout">
    <h2>{{ getTitle }}</h2>
    <input type="text" v-model="contact.name" placeholder="Enter name..." />
    <input type="email" v-model="contact.email" placeholder="Enter email..." />
    <input
      type="tel"
      v-model="contact.phone"
      placeholder="Enter phone number..."
    />
    <button class="primary">Save</button>
    <RouterLink class="close-btn" to="/contact">
      <span class="material-symbols-outlined">close</span>
    </RouterLink>
  </form>
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
    if (contactId) {
      this.contact = await contactService.getById(contactId);
    } else this.contact = contactService.getEmptyContact();
  },
  methods: {
    async save(contact) {
      try {
        const contactToSave = { ...contact };
        await this.$store.dispatch({
          type: "saveContact",
          contact: contactToSave,
        });
      } catch (err) {
        console.log("err:", err);
      } finally {
        this.$router.push("/contact");
      }
    },
  },
  computed: {
    getTitle() {
      return (this.contact._id ? "Edit" : "Add") + " Contact";
    },
  },
};
</script>