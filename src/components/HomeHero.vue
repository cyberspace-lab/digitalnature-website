<template>
  <section class="home-hero">
    <div class="container">
      <div class="hero-content">
        <h1>{{ title }}</h1>
        <div class="hero-text" v-html="content"></div>
      </div>
      <div class="hero-image">
        <img :src="featuredImage" :alt="title">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  content: string;
  featuredImage: string;
}>();
</script>

<style lang="scss">
.home-hero {
  padding: 4rem 0;
  background: var(--background);

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .hero-content {
    h1 {
      font-size: 3rem;
      line-height: 1.2;
      margin-bottom: 2rem;
      color: var(--primary-color);
    }
  }

  .hero-text {
    font-size: 1.2rem;
    line-height: 1.6;
    color: var(--text-color);

    p {
      margin-bottom: 1.5rem;
    }
  }

  .hero-image {
    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 0;

    .container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .hero-content {
      h1 {
        font-size: 2.5rem;
      }
    }
  }
}
</style> 