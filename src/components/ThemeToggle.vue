<template>
  <button
    ref="btnRef"
    class="theme-toggle"
    @click="toggleTheme"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="isDark ? 'Switch to nature mode' : 'Switch to cyber mode'"
  >
    <svg v-if="isDark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
    <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isDark = ref(true);
const btnRef = ref<HTMLButtonElement | null>(null);

const setTheme = (theme: 'dark' | 'light') => {
  isDark.value = theme === 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

// Paint a one-shot radial sweep from the toggle's centre when the
// theme flips. The CSS lives in global.scss under the
// `html[data-theme-transition="active"]::after` rule.
const playSweep = (nextTheme: 'dark' | 'light') => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  const root = document.documentElement;
  const btn = btnRef.value;
  if (btn) {
    const r = btn.getBoundingClientRect();
    const x = ((r.left + r.width / 2) / window.innerWidth) * 100;
    const y = ((r.top + r.height / 2) / window.innerHeight) * 100;
    root.style.setProperty('--cn-sweep-x', `${x}%`);
    root.style.setProperty('--cn-sweep-y', `${y}%`);
  }
  // Tint by destination: cyber (dark) gets magenta, nature (light) gets sage.
  root.style.setProperty(
    '--cn-sweep-color',
    nextTheme === 'dark' ? 'rgba(226, 15, 244, 0.45)' : 'rgba(122, 154, 107, 0.45)'
  );

  root.setAttribute('data-theme-transition', 'active');
  window.setTimeout(() => root.removeAttribute('data-theme-transition'), 520);
};

const toggleTheme = () => {
  const next = isDark.value ? 'light' : 'dark';
  playSweep(next);
  setTheme(next);
};

onMounted(() => {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    setTheme(stored);
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
});
</script>

<style lang="scss" scoped>
.theme-toggle {
  background: none;
  border: 1px solid var(--border-1);
  border-radius: var(--radius-circle);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--fg-2);
  padding: 0;
  margin-left: 0;
  flex-shrink: 0;
  transition:
    color var(--dur-fast) var(--ease-standard),
    border-color var(--dur-fast) var(--ease-standard),
    background-color var(--dur-fast) var(--ease-standard);

  &:hover {
    color: var(--fg-1);
    background-color: var(--bg-secondary);
    border-color: var(--fg-3);
  }
}
</style>
