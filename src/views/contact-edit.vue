<template>
  <form @submit.prevent="save(contact)" v-if="contact" class="contact-edit">
    <input type="text" v-model="contact.name" />
    <input type="email" v-model="contact.email" />
    <input type="tel" v-model="contact.phone" />
    <button>Save</button>
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
      this.contact = await contactService.getContactById(contactId);
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
};
</script>