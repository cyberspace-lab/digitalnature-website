<template>
  <nav class="site-navigation">
    <button
      aria-label="toggle menu"
      @click="handleToggleClick"
      :class="['menu-trigger', { 'is-active': showMenu }]"
    >
      <div class="icon-menu-line">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </div>
      <div class="icon-menu-close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </button>
    <ul>
      <li v-for="(menuItem, index) in menuItems" :key="index">
        <a :href="menuItem.path">{{ menuItem.title }}</a>
      </li>
      <div></div>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/blog", 
    title: "Blog",
  },
  {
    path: "/publications",
    title: "Publications", 
  },
  {
    path: "/team",
    title: "Team",
  },
  {
    path: "/contact",
    title: "Contact",
  },
]

const showMenu = ref(false)

const handleToggleClick = () => {
  showMenu.value = !showMenu.value
}
</script>

<style lang="scss" scoped>
.site-navigation {
  .menu-trigger {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    position: relative;
    
    .icon-menu-close {
      display: none;
    }
    
    &.is-active {
      .icon-menu-line {
        display: none;
      }
      .icon-menu-close {
        display: block;
      }
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 2rem;
    
    li {
      a {
        text-decoration: none;
        color: inherit;
        
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
  
  @media (max-width: 768px) {
    ul {
      flex-direction: column;
    }
  }
}
</style>