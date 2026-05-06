<template>
  <nav class="site-navigation" :class="{ 'is-open': showMenu }">
    <button
      aria-label="Toggle menu"
      :aria-expanded="showMenu ? 'true' : 'false'"
      aria-controls="primary-menu"
      @click="toggle"
      :class="['menu-trigger', { 'is-active': showMenu }]"
    >
      <span v-if="!showMenu" class="menu-icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </span>
      <span v-else class="menu-icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </span>
    </button>
    <ul id="primary-menu" :class="['menu-list', { 'is-open': showMenu }]">
      <li v-for="(menuItem, index) in menuItems" :key="index">
        <a :href="menuItem.path" @click="close">{{ menuItem.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue';

defineProps<{
  menuItems: Array<{ path: string; title: string }>;
}>();

const showMenu = ref(false);

const toggle = () => { showMenu.value = !showMenu.value; };
const close = () => { showMenu.value = false; };

watch(showMenu, (open) => {
  if (typeof document === 'undefined') return;
  document.body.classList.toggle('nav-open', open);
});

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.body.classList.remove('nav-open');
  }
});
</script>

<style lang="scss" scoped>
.site-navigation {
  display: flex;
  align-items: center;
}

// ---- Hamburger trigger ----
.menu-trigger {
  display: none;
  background: none;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 6px;
  color: var(--fg-1);
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  transition:
    color var(--dur-fast) var(--ease-standard),
    border-color var(--dur-fast) var(--ease-standard);
  z-index: 60;

  &:hover { color: var(--fg-1); border-color: var(--border-1); }

  .menu-icon { display: inline-flex; }
}

// ---- Desktop list ----
.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 28px;

  li a {
    text-decoration: none;
    color: var(--fg-3);
    font-family: var(--font-mono);
    font-size: var(--fs-sm);
    letter-spacing: var(--tracking-mono);
    transition: color var(--dur-fast) var(--ease-standard);

    &:hover { color: var(--fg-2); }
  }
}

// ---- Mobile drawer ----
@media (max-width: 768px) {
  .menu-trigger {
    display: inline-flex;
    position: relative;
  }

  // The trigger needs to remain tappable while the drawer is open,
  // so float it above the drawer when expanded.
  .menu-trigger.is-active {
    position: fixed;
    top: 16px;
    right: 16px;
    color: var(--fg-1);
    background: var(--bg-secondary);
    border-color: var(--border-1);
    z-index: 70;
  }

  .menu-list {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-6);
    padding: var(--space-16) var(--space-6);
    margin: 0;
    background: var(--bg-overlay);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    z-index: 50;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-8px);
    transition:
      opacity var(--dur-base) var(--ease-standard),
      transform var(--dur-base) var(--ease-standard);

    li a {
      display: block;
      padding: var(--space-3) var(--space-5);
      font-size: var(--fs-lg);
      color: var(--fg-1);
    }
  }

  .menu-list.is-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
}
</style>
