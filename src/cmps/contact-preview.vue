<template>
  <article>
    <img :src="'https://robohash.org/' + contact.name" alt="" />
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