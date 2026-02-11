<template>
  <a :href="slug" class="news-card">
    <img :src="featuredImage" :alt="title + ' - Featured image'" class="featured-image"/>
    <div class="news-text">
      <h3 class="name">{{title}}</h3>
      <p class="meta"><time>{{date}}</time></p>
    </div>
  </a>
</template>

<script setup lang="ts">

defineProps({
  slug: {
    type: String,
    required: true
  },
  featuredImage: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

</script>


