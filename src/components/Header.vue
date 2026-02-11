<template>
  <header class="header-max-width">
    <div id="menu" class="menu">
      <Navigation :menuItems="menuItems" />
      <div class="menu-controls">
        <div class="lang-links">
          <a
            v-for="link in languageLinks"
            :key="link.code"
            :href="link.href"
            :class="['lang-link', { active: link.active }]"
          >{{ link.code }}</a>
        </div>
        <ThemeToggle />
      </div>
    </div>
    <div class="title-card">
        <img class="title-lines" src="/src/assets/ornaments/title.svg"/>
        <h1 v-html="headerTitle"></h1>
    </div>
    <img class="header-border-lines" src="/src/assets/ornaments/header.svg"/>
  </header>
</template>

<script setup lang="ts">
import Navigation from './Navigation.vue';
import ThemeToggle from './ThemeToggle.vue';

defineProps<{
  headerTitle: string;
  menuItems: Array<{ path: string; title: string }>;
  languageLinks: Array<{ code: string; href: string; active: boolean }>;
}>();
</script>

<style lang="scss" scoped>
.menu-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 20px;
}

.lang-links {
  display: flex;
  gap: 4px;

  .lang-link {
    color: var(--text-faint);
    text-decoration: none;
    font-size: 13px;
    padding: 2px 4px;
    transition: color 0.2s ease;

    &:hover {
      color: var(--text-secondary);
    }

    &.active {
      color: var(--text-primary);
      font-weight: bold;
    }
  }
}
</style>
