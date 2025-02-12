<template>
  <a :to="slug" class="news-card">
    <img :src="index % 2 == 0 ? '/src/assets/ornaments/blog.svg' : '/src/assets/ornaments/blog-2.svg'" class="blog-border"/>
    <img :src="featuredImage" :alt="title + ' - Featured image'" class="featured-image"/>
    <div className="news-text">
      <h3 className="name" href="/akce-pristi-stanice-svet-2023">{{title}}</h3>
      <p className="meta" ><time>{{date}}</time></p>
    </div>
  </a>
</template>

<script setup lang="ts">

defineProps({
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


