<template>
  <article class="publication-card">
    <h3 class="title">{{ title }}</h3>
    <p class="authors">{{ authors }}</p>
    <p class="year">{{ new Date(date).getFullYear() }}</p>
    <p class="excerpt">{{ excerpt }}</p>
    <a v-if="link" :href="link" target="_blank" rel="noopener noreferrer" class="read-more">
      Read More
      <span class="icon">→</span>
    </a>
  </article>
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
  excerpt: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.publication-card {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.publication-card:hover {
  transform: translateY(-3px);
}

.title {
  font-size: 1.25rem;
  margin: 0 0 0.5rem 0;
  color: var(--heading-color);
}

.authors {
  font-size: 0.9rem;
  color: var(--text-color-light);
  margin: 0.5rem 0;
}

.year {
  font-size: 0.9rem;
  color: var(--text-color-light);
  margin: 0.5rem 0;
}

.excerpt {
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1rem 0;
}

.read-more {
  display: inline-flex;
  align-items: center;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
}

.icon {
  margin-left: 0.5rem;
  transition: transform 0.2s ease;
}

.read-more:hover .icon {
  transform: translateX(3px);
}
</style> 