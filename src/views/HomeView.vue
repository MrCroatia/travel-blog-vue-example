<template>
  <div class="home-view">
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Discover Your Next Adventure</h1>
        <p class="hero-subtitle">Explore the world's most breathtaking destinations</p>
      </div>
    </section>

    <section class="featured-destinations">
      <h2 class="section-title">Featured Destinations</h2>
      <div class="destinations-grid">
        <BlogPost
          v-for="destination in featuredDestinations"
          :key="destination.id"
          :destination="destination"
          class="destination-card"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import type { Destination } from '@/stores'
import BlogPost from '@/components/BlogPost.vue'

const store = useStore()
// Use ref instead of computed to avoid reactivity overhead
const featuredDestinations = ref<Destination[]>([])

onMounted(() => {
  // Set destination data immediately after component mount
  featuredDestinations.value = store.getters.featuredDestinations
})
</script>

<!-- Keep your existing styles here -->

<style lang="scss" scoped>
.home-view {
  padding-bottom: 4rem;
  will-change: transform; /* Optimize for animations */
}

.hero {
  position: relative;
  height: 60vh;
  background:
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('/images/hero-bg.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  border-radius: 0 0 30px 30px;
  overflow: hidden;
  /* Use transform for better performance instead of opacity */
  animation: fadeInUp 0.5s ease-out;

  @media (min-width: 768px) {
    height: 70vh;
  }
}

.hero-content {
  text-align: center;
  color: white;
  padding: 0 1.5rem;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
}

.hero-subtitle {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: var(--secondary);
  }
}

.destinations-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 0 1rem;
  /* Add contain property to improve performance */
  contain: layout paint style;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
