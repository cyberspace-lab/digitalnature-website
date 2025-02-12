<template>
  <div class="member">    
    <img 
      class="member-border" 
      :src="index % 2 === 0 ? './src/assets/ornaments/member.svg' : './src/assets/ornaments/member-2.svg'"
    />
    <a :to="link" class="member-href"> 
      <img v-if="props.featuredImage" :src="props.featuredImage" :alt="title" class="member-thumbnail" />
      <p class="member-name">{{props.title}}</p>
      <p class="member-role">{{props.description}}</p>
    </a>
  </div>
</template>

<script setup lang="ts">


const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: ''
  },
  featuredImage: {
    type: String,
    default: ''
  },
  index: {
    type: Number,
    required: true
  }
});

</script>