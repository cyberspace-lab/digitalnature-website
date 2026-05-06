<template>
  <div class="member">
    <a :href="link" class="member-href">
      <div class="member-avatar">
        <img
          v-if="featuredImage"
          :src="featuredImage"
          :alt="title"
          class="member-thumbnail"
        />
      </div>
      <p class="member-name">{{ title }}</p>
      <p class="member-role">{{ description }}</p>
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: '',
  },
  featuredImage: {
    type: String,
    default: '',
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>
