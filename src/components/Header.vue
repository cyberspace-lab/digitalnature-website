<template>
  <header class="header-max-width">
    <div id="menu" class="menu">
      <Navigation :menuItems="menuItems" />
      <div class="menu-controls">
        <div class="lang-links" aria-label="Language">
          <template v-for="(link, idx) in languageLinks" :key="link.code">
            <span v-if="idx > 0" class="lang-sep" aria-hidden="true">|</span>
            <a
              :href="link.href"
              :class="['lang-link', { active: link.active }]"
              :aria-current="link.active ? 'true' : undefined"
            >{{ link.code }}</a>
          </template>
        </div>
        <ThemeToggle />
      </div>
    </div>
    <div class="title-card">
      <img class="title-lines" src="/src/assets/ornaments/title.svg" aria-hidden="true" />
      <h1 v-html="headerTitle"></h1>
    </div>
    <img class="header-border-lines" src="/src/assets/ornaments/header.svg" aria-hidden="true" />
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
  gap: 12px;
  margin-left: 20px;
}

.lang-links {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
}

.lang-link {
  color: var(--fg-4);
  text-decoration: none;
  font-size: var(--fs-sm);
  padding: 2px 4px;
  letter-spacing: var(--tracking-mono);
  transition: color var(--dur-fast) var(--ease-standard);

  &:hover { color: var(--fg-2); }

  &.active {
    color: var(--fg-1);
    font-weight: 700;
  }
}

.lang-sep {
  color: var(--fg-5);
  font-size: var(--fs-sm);
  user-select: none;
}
</style>
