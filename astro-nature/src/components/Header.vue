<template>
  <header class="header-max-width">
    <div id="menu" class="menu">
      <Navigation />
    </div>
    <div className="title-card">
        <img className="title-lines" src="./src/assets/ornaments/title.svg"/>
        <h1>Impact of digital<br />forests on<br />psychological<br />well-being</h1>
    </div>
    <img className="header-border-lines" src="./src/assets/ornaments/header.svg"/>
  </header>
</template>

<script setup lang="ts">
import Navigation from './Navigation.vue';
</script>


