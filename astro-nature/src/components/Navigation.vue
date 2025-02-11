<template>
  <nav class="site-navigation">
    <button
      aria-label="toggle menu"
      @click="handleToggleClick"
      :class="['menu-trigger', { 'is-active': showMenu }]"
    >
      <div class="icon-menu-line">
        <RiMenu3Line />
      </div>
      <div class="icon-menu-close">
        <RiCloseLine />
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
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

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

export default Navigation