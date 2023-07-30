<template>
  <section class="contact-index main-layout full">
    <ContactFilter @filter="onSetFilterBy" />
    <RouterLink class="add-link" to="/contact/edit">
      <button class="primary">Add a contact</button>
    </RouterLink>
    <ContactList
      @remove="removeContacts"
      v-if="contacts"
      :contacts="contacts"
    />
  </section>
</template>

<script>
import { eventBus } from "@/services/eventBus.service";

import ContactFilter from "@/cmps/contact-filter.vue";
import ContactList from "@/cmps/contact-list.vue";

export default {
  data() {
    return {
    };
  },
  async created() {
    this.$store.dispatch({ type: "loadContacts" });
  },
  methods: {
    async removeContacts(contactId) {
      const msg = {
        txt: `Contact ${contactId} deleted`,
        type: "success",
        timeout: 2500,
      };
      this.$store.dispatch({ type: "removeContact", contactId });
      eventBus.emit("user-msg", msg);
    },

    onSetFilterBy(filterBy) {
      this.$store.dispatch({ type: "loadContacts", filterBy });
    },
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
  },
  components: {
    ContactFilter,
    ContactList,
  },
};
</script>

<style>
</style>