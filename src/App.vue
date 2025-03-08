<template>
  <Header />
  <main class="container">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style lang="scss">
/* Global page transition animations */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Main container styles */
.container {
  min-height: 70vh;
  padding: 2rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
  animation: fadeIn 0.8s ease-out;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
}
</style>
