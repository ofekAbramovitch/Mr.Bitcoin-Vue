<template>
  <TransitionGroup name="list" tag="ul" class="contact-list">
    <li class="contact-preview" v-for="contact in contacts" :key="contact._id">
      <ContactPreview :contact="contact" />
      <section class="actions">
        <RouterLink :to="`/contact/${contact._id}`">
          <span class="material-symbols-outlined preview-icon">info</span>
        </RouterLink>
        <RouterLink :to="`/contact/edit/${contact._id}`">
          <span class="material-symbols-outlined preview-icon"
            >edit</span
          >
        </RouterLink>
        <span
          class="material-symbols-outlined preview-icon"
          @click="onRemoveContact(contact._id)"
          >delete</span
        >
      </section>
    </li>
  </TransitionGroup>
</template>

<script>
import ContactPreview from "@/cmps/contact-preview.vue";

export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onRemoveContact(contactId) {
      this.$emit("remove", contactId);
    },
  },
  components: {
    ContactPreview,
  },
};
</script>