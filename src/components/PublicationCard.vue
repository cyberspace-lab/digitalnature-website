<template>
  <a :href="link" class="publication-card">
    <h3 class="publication-name">{{ title }}</h3>
    <p class="publication-meta">{{ authors }} {{ date }}</p>
  </a>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: ''
  },
  index: {
    type: Number,
    default: 0
  },
});
</script>
