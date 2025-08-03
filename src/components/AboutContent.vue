<template>
  <article class="about-page">
    <div class="container">
      <header class="featured-image">
        <img :src="featuredImage" :alt="title">
      </header>
      <div class="page-content">
        <h1>{{ title }}</h1>
        <div class="content" v-html="content"></div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  content: string;
  featuredImage: string;
}>();
</script>

<style lang="scss">
.about-page {
  padding: 2rem 0;

  .featured-image {
    margin-bottom: 2rem;
    border-radius: 12px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  .page-content {
    max-width: 768px;
    margin: 0 auto;
    padding: 0 1rem;

    h1 {
      font-size: 2.5rem;
      color: var(--primary-color);
      margin-bottom: 2rem;
    }

    .content {
      font-size: 1.1rem;
      line-height: 1.7;
      color: var(--text-color);

      p {
        margin-bottom: 1.5rem;
      }

      h2 {
        color: var(--primary-color);
        margin: 2rem 0 1rem;
      }

      ul, ol {
        margin-bottom: 1.5rem;
        padding-left: 1.5rem;
      }
    }
  }
}
</style> 