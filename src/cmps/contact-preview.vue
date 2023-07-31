<template>
  <article>
    <img
      :src="'https://api.dicebear.com/5.x/open-peeps/svg?seed=' + contact._id"
    />
    <p>{{ contact.name }}</p>
  </article>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>