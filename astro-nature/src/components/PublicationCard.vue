<template>
  <a :to="link" class="publication-card">
    <img class="publication-border" :src= "index % 2 === 0 ? '/src/assets/ornaments/paper.svg' : '/src/assets/ornaments/paper-2.svg'"/>
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

});
</script>
