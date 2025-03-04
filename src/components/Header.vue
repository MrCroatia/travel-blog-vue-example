<template>
  <header class="header">
    <nav class="nav-container">
      <router-link to="/" class="logo">
        <span class="logo-text">Wanderlust</span>
        <span class="logo-dot">.</span>
      </router-link>

      <div class="nav-links" :class="{ active: isMenuOpen }">
        <router-link
          v-for="link in navigationLinks"
          :key="link.path"
          :to="link.path"
          class="nav-item"
          @click="isMenuOpen = false"
        >
          {{ link.name }}
        </router-link>
      </div>

      <button class="menu-toggle" @click="toggleMenu">
        <div class="hamburger" :class="{ active: isMenuOpen }"></div>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style lang="scss" scoped>
.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.logo {
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 700;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  .logo-text {
    color: var(--primary);
  }

  .logo-dot {
    color: var(--secondary);
  }
}

.nav-links {
  display: flex;
  gap: 2rem;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    right: -100%;
    flex-direction: column;
    background: white;
    width: 100%;
    max-width: 300px;
    padding: 2rem;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 0 15px;

    &.active {
      right: 0;
    }
  }
}

.nav-item {
  color: var(--text);
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--secondary);
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.router-link-exact-active::after {
    width: 100%;
  }

  &.router-link-exact-active {
    color: var(--primary);
    font-weight: 600;
  }
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
}

.hamburger {
  width: 30px;
  height: 2px;
  background: var(--primary);
  position: relative;
  transition: all 0.3s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    transition: inherit;
  }

  &::before {
    top: -8px;
  }

  &::after {
    top: 8px;
  }

  &.active {
    background: transparent;

    &::before {
      transform: rotate(45deg) translate(5px, 6px);
    }

    &::after {
      transform: rotate(-45deg) translate(5px, -6px);
    }
  }
}
</style>
